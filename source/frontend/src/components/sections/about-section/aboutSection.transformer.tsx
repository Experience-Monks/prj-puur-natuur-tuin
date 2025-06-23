import type { SectionTypeName } from 'src/data/enum/SectionTypeName';
import { processButtonLink } from '../../buttons/button/Button.utils';

export type AboutSectionCms = {
  _type: SectionTypeName.AboutSection;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _key?: string;
  title?: string;
  content?: string;
  image?: {
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
  showButton?: boolean;
  ctaButton?: {
    text?: string;
    label?: string;
    link?: {
      linkType?: 'internal' | 'external' | 'email';
      internalLink?: { slug?: { current?: string } };
      externalUrl?: string;
      emailAddress?: string;
    };
    url?: string;
  };
};

export type AboutSectionProps = {
  title?: string;
  content?: string;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  showButton?: boolean;
  ctaLabel?: string;
  ctaUrl?: string;
  refs?: {
    container?: React.RefObject<HTMLDivElement>;
  };
};

export async function aboutSectionTransformer(
  section?: AboutSectionCms,
): Promise<Omit<AboutSectionProps, 'refs'>> {
  // Ensure section exists and has expected structure
  if (!section || typeof section !== 'object') {
    return {
      title: '',
      content: '',
      image: undefined,
      showButton: true,
      ctaLabel: '',
      ctaUrl: '',
    };
  }

  // Destructure and provide defaults
  const { title = '', content = '', image, ctaButton, showButton = true } = section;

  // Transform the data into the component props format
  return {
    title,
    content,
    // Transform image if it exists with URL
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    image: image?.asset?.url
      ? {
          url: image.asset.url,
          alt: title || 'About us image',
          width: image.asset.metadata?.dimensions?.width,
          height: image.asset.metadata?.dimensions?.height,
        }
      : undefined,
    showButton,
    // Transform CTA button
    ctaLabel: ctaButton?.text ?? ctaButton?.label ?? '',
    ctaUrl: processButtonLink(ctaButton ?? {}),
  };
}
