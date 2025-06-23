import type { MutableRefs } from '@mediamonks/react-kit';

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
};

export type AboutSectionRefs = MutableRefs<{
  self: HTMLDivElement;
}>;
