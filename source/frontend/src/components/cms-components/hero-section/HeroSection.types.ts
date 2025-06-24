import { type MutableRefs } from '@mediamonks/react-kit';
import { type ReactNode } from 'react';

export type HeroSectionRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  backgroundImage?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  contentBlocks?: Array<ReactNode>;
  showButton?: boolean;
  ctaLabel?: string;
  ctaUrl?: string;
  className?: string;
  variant?: 'default' | 'centered' | 'large';
};

export type HeroSectionTemplateProps = HeroSectionProps & {
  refs: HeroSectionRefs;
};
