/* eslint-disable no-underscore-dangle */
import { graphqlRequest } from 'src/net/graphql/graphqlRequest';
import type { GlobalSettings } from '../../../app/[[...slug]]/page.types';
import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import { linkTransformer } from '../../../data/transformers/linkTransformer';
import { type IntroSectionIdentifierFragment } from '../../../graphql/graphql';
import { IntroSection } from './IntroSection';
import { introSectionQuery } from './IntroSection.query';
import {
  type IntroBlock,
  IntroBlockType,
  IntroIconType,
  type IntroSectionProps,
} from './IntroSection.types';

export const introSectionTransformer = createPropsTransformer(
  IntroSection,
  async (
    identifier: IntroSectionIdentifierFragment,
    { includeDrafts }: GlobalSettings,
  ): Promise<IntroSectionProps> => {
    const { id } = identifier;

    const { data } = await graphqlRequest({
      query: introSectionQuery,
      variables: {
        id: id ?? '',
      },
      includeDrafts,
    });

    if (!data) {
      throw new ReferenceError(`Content entry "${id}" of type "NewsSection" not found or invalid.`);
    }

    // Process blocks from CMS data
    const blocks: Array<IntroBlock> =
      data.blocks
        ?.filter((block): block is NonNullable<typeof block> => block !== null)
        .map((block) => {
          if (block.__typename === 'IntroTextBlock') {
            return {
              _key: block._key ?? 'text-block',
              _type: IntroBlockType.Text,
              text: block.text ?? '',
            };
          }
          if (block.__typename === 'IntroIconBlock') {
            // Convert the string iconType to the enum value or default to Sun if not valid
            const iconTypeValue = block.iconType ?? 'default';
            const iconType = Object.values(IntroIconType).includes(iconTypeValue as IntroIconType)
              ? (iconTypeValue as IntroIconType)
              : IntroIconType.Sun;

            return {
              _key: block._key ?? 'icon-block',
              _type: IntroBlockType.Icon,
              iconType,
            };
          }
          // Default to text block if type is unknown
          return {
            _key: 'unknown-block',
            _type: IntroBlockType.Text,
            text: '',
          };
        }) ?? [];

    return {
      title: data.title ?? '',
      subtitle: data.subtitle ?? undefined,
      content: data.content ?? undefined,
      blocks,
      ...(data.link
        ? {
            link: linkTransformer(data.link),
          }
        : {}),
    };
  },
);
