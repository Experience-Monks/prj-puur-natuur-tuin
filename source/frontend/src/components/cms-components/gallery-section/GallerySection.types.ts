import type { MutableRefs } from '@mediamonks/react-kit';
import { type CarouselRotation } from '../../general/carousel/Carousel.enum';

export type GallerySectionProps = {
  title?: string;
  subtitle?: string;
  images?: Array<string>;
  rotation?: CarouselRotation;
  marginBottom?: SpacingOption;
};

export type GallerySectionRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export type SpacingOption = 'none' | 'small' | 'medium' | 'large';
