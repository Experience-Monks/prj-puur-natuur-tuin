/* eslint-disable no-underscore-dangle */
import { type RefObject } from 'react';
import { type SectionTypeName } from 'src/data/enum/SectionTypeName';
import { graphqlRequest } from 'src/net/graphql/graphqlRequest';
import type { IntroSectionDataQuery } from '../../../graphql/graphql';
import { processButtonLink } from '../../buttons/button/Button.utils';
import { introSectionQuery } from './IntroSection.query';
import { type IntroBlock, IntroBlockType, IntroIconType } from './IntroSection.types';

// Define the GraphQL response type using the generated type
type IntroSectionDataResponse = IntroSectionDataQuery;

export type IntroSectionCms = {
  _type: SectionTypeName.IntroSection;
  _key?: string;
  enabled?: boolean;
  title?: string;
  subtitle?: string;
  content?: string;
  cta?: {
    text?: string;
    label?: string;
    url?: string;
    link?: {
      linkType?: 'internal' | 'external' | 'email';
      internalLink?: {
        slug?: {
          current?: string;
        };
      };
      externalUrl?: string;
      emailAddress?: string;
    };
  };
  blocks?: Array<IntroBlock>;
};

export type IntroSectionProps = {
  title: string;
  subtitle?: string;
  content?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  showButton?: boolean;
  blocks?: Array<IntroBlock>;
  refs?: {
    container?: RefObject<HTMLDivElement>;
  };
};

export async function introSectionTransformer(
  section: IntroSectionCms,
): Promise<Omit<IntroSectionProps, 'refs'>> {
  try {
    // If enabled is explicitly set to false, don't render this section
    if (section.enabled === false) {
      return { title: '' };
    }

    // Fetch the intro section data using the typed document
    const introResponse = (await graphqlRequest({
      query: introSectionQuery,
    })) satisfies IntroSectionDataResponse;

    // Find the matching intro section from the CMS data
    const introData = introResponse.allIntroSection?.find(
      // eslint-disable-next-line no-underscore-dangle
      (item) => item._key === section._key,
    );

    // Process blocks from CMS data
    let blocks: Array<IntroBlock> = [];

    // Use section blocks if available, otherwise use blocks from the fetched data
    if (section.blocks && section.blocks.length > 0) {
      const { blocks: sectionBlocks } = section;
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
    if (blocks.length === 0 && (section.title || introData?.title)) {
      blocks.push({
        _key: 'generated-title-block',
        _type: IntroBlockType.Text,
        text: section.title ?? introData?.title ?? '',
      });
    }

    // Process the CTA link using the utility function
    const ctaData = section.cta ?? introData?.cta;

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

    const result = {
      title: section.title ?? introData?.title ?? '',
      subtitle: section.subtitle ?? introData?.subtitle ?? undefined,
      content: section.content ?? introData?.content ?? undefined,
      ctaLabel,
      ctaUrl,
      showButton,
      blocks,
    };

    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching intro section data:', error);

    // Fallback to using only the section data provided
    // If no blocks are provided but we have a title, create a text block from the title
    const blocks = section.blocks ?? [];
    if (blocks.length === 0 && section.title) {
      // Create a single text block with the title
      blocks.push({
        _key: 'generated-title-block',
        _type: IntroBlockType.Text,
        text: section.title,
      });
    }

    // Process the CTA link using the utility function
    const ctaData = section.cta;

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
    const ctaLabel = ctaData?.text ?? section.cta?.label;

    const showButton = Boolean(ctaLabel && ctaUrl);

    return {
      title: section.title ?? '',
      subtitle: section.subtitle ?? undefined,
      content: section.content ?? undefined,
      ctaLabel,
      ctaUrl,
      showButton,
      blocks,
    };
  }
}
