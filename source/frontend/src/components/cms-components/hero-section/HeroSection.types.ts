import { type MutableRefs } from '@mediamonks/react-kit';
import { type ReactNode } from 'react';
import type { CmsLinkProps } from '../../../utils/link.utils';

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
  link?: CmsLinkProps;
  className?: string;
  variant?: 'default' | 'centered' | 'large';
};

export type HeroSectionTemplateProps = HeroSectionProps & {
  refs: HeroSectionRefs;
};
