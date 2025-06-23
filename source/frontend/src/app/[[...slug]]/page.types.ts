import { type PageContentPropsTransformMap } from './page.componentTransformersMap';
import {
  type ComponentPropsTransformer,
  type ContentIdentifierItem,
  type PageData,
} from './page.transformers';

export type TransformedPageProps = {
  path?: string;
  navigation?: Array<PageContentProps>;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  metadata?: PageData['metadata'] | null;
  content: Array<PageContentProps>;
  footer?: Array<PageContentProps>;
};

export type GlobalConfiguration = {
  baseUrl: string;
  navigation: ContentIdentifierItem;
  footer: ContentIdentifierItem;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExtractDataType<T extends () => Promise<ComponentPropsTransformer<any, any>>> =
  T extends () => Promise<infer Transformer>
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Transformer extends ComponentPropsTransformer<any, infer Props>
      ? Props
      : never
    : never;

export type PageContentProps = {
  [Type in keyof PageContentPropsTransformMap]: {
    id: string;
    type: Type;
    data: ExtractDataType<PageContentPropsTransformMap[Type]>;
    error?: string;
  };
}[keyof PageContentPropsTransformMap];
