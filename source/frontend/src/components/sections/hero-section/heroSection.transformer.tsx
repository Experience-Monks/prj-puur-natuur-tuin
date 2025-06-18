/* eslint-disable no-underscore-dangle */
import { type ReactElement, type ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { SectionTypeName } from 'src/data/enum/SectionTypeName';
import { TextBlock } from '../../blocks/text-block/TextBlock';
import { type HeroSectionProps } from './HeroSection.types';

export type HeroSectionCms = {
  _type: SectionTypeName.HeroSection;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _key?: string;
  enabled?: boolean;
  title?: string;
  subtitle?: string;
  backgroundImage?: {
    asset: {
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
        };
      };
    };
  };
  contentBlocks?: Array<{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _key: string;
    _type: string;
    text?: string;
    richText?: boolean;
    variant?: 'default' | 'large' | 'highlight';
    align?: 'left' | 'center' | 'right';
    maxWidth?: number;
  }>;
  ctaButton?: {
    label?: string;
    url?: string;
  };
  variant?: 'default' | 'centered' | 'large';
};

export const heroSectionTransformer = async (
  section: HeroSectionCms,
): Promise<Omit<HeroSectionProps, 'refs'>> => {
  // If enabled is explicitly set to false, don't render this section
  if (section.enabled === false) {
    // eslint-disable-next-line no-console
    console.log('[HeroSectionTransformer] Section disabled, returning empty title');
    return { title: '' };
  }

  // Destructure and provide defaults
  const {
    title = '',
    subtitle = '',
    backgroundImage,
    contentBlocks = [],
    ctaButton,
    variant = 'default',
  } = section;

  // Transform content blocks to React components
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const transformedBlocks: Array<ReactNode> = (contentBlocks || [])
    .map((block) => {
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
    title,
    subtitle,
    backgroundImage: backgroundImage?.asset
      ? {
          url: backgroundImage.asset.url,
          alt: title || 'Hero image',
          width: backgroundImage.asset.metadata?.dimensions?.width,
          height: backgroundImage.asset.metadata?.dimensions?.height,
        }
      : undefined,
    contentBlocks: transformedBlocks,
    ctaLabel: ctaButton?.label ?? '',
    ctaUrl: ctaButton?.url ?? '',
    variant,
  };
};
