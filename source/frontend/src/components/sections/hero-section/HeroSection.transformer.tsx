/* eslint-disable no-underscore-dangle */
import { type ReactElement, type ReactNode } from 'react';
import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import type { HeroSectionIdentifierFragment } from '../../../graphql/graphql';
import { graphqlRequest } from '../../../net/graphql/graphqlRequest';
import { TextBlock } from '../../blocks/text-block/TextBlock';
import { processButtonLink } from '../../buttons/button/Button.utils';
import { HeroSection } from './HeroSection';
import { heroSectionQuery } from './HeroSection.query';
import { type HeroSectionProps } from './HeroSection.types';

export const heroSectionTransformer = createPropsTransformer(
  HeroSection,
  async (
    identifier: HeroSectionIdentifierFragment,
    { includeDrafts }: { includeDrafts: boolean },
  ): Promise<HeroSectionProps> => {
    const { id } = identifier;

    const { data } = await graphqlRequest({
      query: heroSectionQuery,
      variables: {
        id: id ?? '',
      },
      includeDrafts,
    });

    if (!data) {
      throw new ReferenceError(`Content entry "${id}" of type "HeroSection" not found or invalid.`);
    }

    // Transform content blocks to React components
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const transformedBlocks: Array<ReactNode> = (data.contentBlocks || [])
      .map((block) => {
        if (!block) {
          return null;
        }
        // eslint-disable-next-line @typescript-eslint/naming-convention
        switch (block._type) {
          case 'textBlock': {
            return block.text ? (
              <TextBlock
                // eslint-disable-next-line @typescript-eslint/naming-convention
                key={block._key}
                text={block.text}
                variant={block.variant ?? 'default'}
                align={block.align ?? 'left'}
                richText={block.richText ?? false}
                maxWidth={block.maxWidth ?? undefined}
              />
            ) : null;
          }
          // Add cases for other block types as needed
          default: {
            // Skip this block type
            return false;
          }
        }
      })
      .filter(Boolean) as Array<ReactElement>;

    return {
      title: data.title ?? '',
      subtitle: data.subtitle ?? '',
      backgroundImage: data.backgroundImage?.asset?.url
        ? {
            url: data.backgroundImage.asset.url,
            alt: data.title || 'Hero image',
            width: data.backgroundImage.asset.metadata?.dimensions?.width ?? undefined,
            height: data.backgroundImage.asset.metadata?.dimensions?.height ?? undefined,
          }
        : undefined,
      contentBlocks: transformedBlocks,
      ctaLabel: data.ctaButton?.text ?? '',
      // TODO fix button link
      ctaUrl: processButtonLink({}),
      // showButton,
      ...(data.variant
        ? {
            variant: data.variant as HeroSectionProps['variant'],
          }
        : {}),
    };
  },
);
