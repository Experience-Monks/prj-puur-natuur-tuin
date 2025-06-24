/* eslint-disable no-underscore-dangle */
import { graphqlRequest } from 'src/net/graphql/graphqlRequest';
import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import { type IntroSectionIdentifierFragment } from '../../../graphql/graphql';
import { processButtonLink } from '../../buttons/button/Button.utils';
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
    { includeDrafts }: { includeDrafts: boolean },
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

    // Find the matching intro section from the CMS data
    const introData = data.blocks?.find(
      // eslint-disable-next-line no-underscore-dangle
      (item) => item?._key === data._key,
    );

    // Process blocks from CMS data
    let blocks: Array<IntroBlock> = [];

    // Use section blocks if available, otherwise use blocks from the fetched data
    if (data.blocks && data.blocks.length > 0) {
      const { blocks: sectionBlocks } = data;
      blocks = sectionBlocks;
    } else if (introData?.blocks) {
      // Map CMS blocks to our IntroBlock type
      blocks = introData.blocks
        .filter((block): block is NonNullable<typeof block> => block !== null)
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
            _key: block._key ?? 'unknown-block',
            _type: IntroBlockType.Text,
            text: '',
          };
        });
    }

    // If no blocks are provided but we have a title, create a text block from the title
    if (blocks.length === 0 && (data.title || introData?.title)) {
      blocks.push({
        _key: 'generated-title-block',
        _type: IntroBlockType.Text,
        text: data.title ?? introData?.title ?? '',
      });
    }

    // Process the CTA link using the utility function
    const ctaData = data.cta ?? introData?.cta;

    // Transform the CTA data to match what processButtonLink expects
    const buttonData = ctaData
      ? {
          link: ctaData.link
            ? {
                linkType: ctaData.link.linkType as 'internal' | 'external' | 'email' | undefined,
                internalLink: ctaData.link.internalLink
                  ? {
                      slug: ctaData.link.internalLink.slug
                        ? {
                            current: ctaData.link.internalLink.slug.current ?? undefined,
                          }
                        : undefined,
                    }
                  : undefined,
                externalUrl: ctaData.link.externalUrl ?? undefined,
                emailAddress: ctaData.link.emailAddress ?? undefined,
              }
            : undefined,
          url: undefined,
        }
      : { link: undefined, url: undefined };

    const ctaUrl = processButtonLink(buttonData);
    const ctaLabel = ctaData?.text ?? undefined;
    const showButton = Boolean(ctaLabel && ctaUrl);

    return {
      title: data.title ?? introData?.title ?? '',
      subtitle: data.subtitle ?? introData?.subtitle ?? undefined,
      content: data.content ?? introData?.content ?? undefined,
      ctaLabel,
      ctaUrl,
      showButton,
      blocks,
    };
  },
);
