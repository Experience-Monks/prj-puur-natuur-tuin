/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/naming-convention */
import { type Maybe, type Serializable, type Some } from 'isntnt';
import type React from 'react';
import { type ForwardRefExoticComponent, type FunctionComponent } from 'react';
import { type PageDataFragment } from '../../graphql/graphql';
import { type EntryIdentifier } from '../../types/EntryIdentifier';
import { deepOmitUndefined } from '../../utils/transformer/deepOmitUndefined';
import { propsTransformMap } from './page.componentTransformersMap';
import {
  type GlobalSettings,
  type PageContentProps,
  type TransformedPageProps,
} from './page.types';

type MaybeEntryIdentifier<Type extends string = string> = {
  __typename?: Type;
  id?: string | null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContentIdentifierItem = MaybeEntryIdentifier<any> | null | undefined;

type ContentIdentifierItems = Array<ContentIdentifierItem>;

export function getContentIdentifierItems(data: {
  __typename: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: Maybe<Array<any>>;
}): ContentIdentifierItems {
  if (!data.content || (data.content.length ?? 0) === 0) {
    return [];
  }

  /* eslint-disable no-underscore-dangle */
  switch (data.__typename) {
    case 'Page': {
      return data.content;
    }
    default: {
      cnsl.error('Unknown content type', data.__typename);
      return [];
    }
  }
  /* eslint-enable no-underscore-dangle */
}

export type PageData = Some<Some<PageDataFragment>> & {
  metadata:
    | (Some<Some<PageDataFragment>>['openGraph'] & {
        index: boolean;
        pageId: string;
        title: string;
      })
    | null;
};

export type PageTransformerContextDefaults = {
  footer: ContentIdentifierItem;
  navigation: ContentIdentifierItem;
};

const isPage = (data: Record<string, unknown>): data is PageData =>
  // eslint-disable-next-line no-underscore-dangle
  data.__typename === 'Page';

/* eslint-disable no-underscore-dangle */
export async function pageTransformer(
  data: PageData,
  context: GlobalSettings,
  options: {
    skipMetadata?: boolean;
  },
): Promise<TransformedPageProps> {
  const defaultPageData: {
    metadata: PageData['metadata'] | undefined;
  } = {
    metadata: {
      ...(options.skipMetadata
        ? {}
        : {
            ...(isPage(data) ? (data.metadata ?? {}) : {}),
            title: isPage(data) ? (data.title ?? '') : '',
            // TODO: This should be set by the search engine
            // When not set search engine indexing is enabled, the boolean value acts as a opt-out
            index: isPage(data),
            pageId: data.id,
          }),
    } as PageData['metadata'] | undefined,
  };

  let contentIdentifierItems = [];

  contentIdentifierItems = getContentIdentifierItems(data);

  const navigationTransform = transformContentProps([context.defaults.navigation], context);
  const footerTransform = transformContentProps([context.defaults.footer], context);

  const [navigation, content, footer] = await Promise.all([
    navigationTransform,
    await transformContentProps(contentIdentifierItems, context),
    footerTransform,
  ] as const);

  return {
    ...defaultPageData,
    navigation: navigation.filter((navigationContent) => navigationContent !== null) as
      | Array<PageContentProps>
      | undefined,
    content: content.filter(
      (componentContent) => componentContent !== null,
    ) as Array<PageContentProps>,
    footer: footer.filter((footerContent) => footerContent !== null) as
      | Array<PageContentProps>
      | undefined,
  };
}
/* eslint-enable no-underscore-dangle */

export async function transformContentProps(
  identifiers: ContentIdentifierItems,
  context: GlobalSettings,
): Promise<Array<PageContentProps | null>> {
  const promises = identifiers.map(async (identifier) => {
    if (!identifier) {
      return null;
    }

    const { __typename: type, id } = identifier;

    if (!Object.hasOwn(propsTransformMap, type)) {
      cnsl.warn('No transformer found for type:', type);
      return {
        id,
        type,
        data: null,
        error: `No transformer found for type: ${type}`,
      };
    }

    const transformerImportFunction = propsTransformMap[type as keyof typeof propsTransformMap];

    try {
      const transformer = await transformerImportFunction();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const transformedData = await transformer.transform(identifier as any, context);

      const data = deepOmitUndefined(
        transformedData as unknown as Serializable,
      ) as unknown as typeof transformedData;

      return {
        id,
        type,
        data,
      } as PageContentProps;
    } catch (error) {
      cnsl.error('Error in transformer for type:', type, error);
      return null;
    }
  });

  const results = await Promise.all(promises);

  return results.filter((item): item is PageContentProps => item !== null);
}

type ComponentPropsTransform<Type extends string, Props> = (
  identifier: EntryIdentifier<Type>,
  context: GlobalSettings,
) => Promise<Props>;

export type ComponentPropsTransformer<Type extends string, Props> = {
  component:
    | FunctionComponent<Props>
    | ForwardRefExoticComponent<Props>
    | React.ComponentType<Props>;
  transform: ComponentPropsTransform<Type, Props>;
};
