import { type RefObject } from 'react';
import { type SectionTypeName } from 'src/data/enum/SectionTypeName';
import { type IntroBlock, IntroBlockType } from './IntroSection.types';

export type IntroSectionCms = {
  _type: SectionTypeName.IntroSection;
  title?: string;
  subtitle?: string;
  content?: string;
  cta?: {
    label?: string;
    url?: string;
  };
  blocks?: Array<IntroBlock>;
  _key?: string;
  enabled?: boolean;
};

export type IntroSectionProps = {
  title: string;
  subtitle?: string;
  content?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  blocks?: Array<IntroBlock>;
  refs?: {
    container?: RefObject<HTMLDivElement>;
  };
};

export async function introSectionTransformer(
  section: IntroSectionCms,
): Promise<Omit<IntroSectionProps, 'refs'>> {
  // If enabled is explicitly set to false, don't render this section
  if (section.enabled === false) {
    return { title: '' };
  }

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

  const result = {
    title: section.title ?? '',
    subtitle: section.subtitle,
    content: section.content,
    ctaLabel: section.cta?.label,
    ctaUrl: section.cta?.url,
    blocks,
  };

  return result;
}
