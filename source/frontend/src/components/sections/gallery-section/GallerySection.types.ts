import type { MutableRefs } from '@mediamonks/react-kit';

export type GallerySectionProps = {
  title?: string;
  subtitle?: string;
  images?: Array<string>;
};

export type GallerySectionRefs = MutableRefs<{
  self: HTMLDivElement;
}>;
