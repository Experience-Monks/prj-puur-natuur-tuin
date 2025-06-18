import type { ButtonProps } from '../button/Button';
import { type ShowMoreButtonVariants } from './ShowMoreButton.enums';

export type ShowMoreButtonProps = {
  label?: string;
  href: string;
  variant?: ShowMoreButtonVariants;
  className?: string;
} & ButtonProps;

export type ShowMoreButtonData = {
  showMoreButton: boolean;
  showMoreButtonVariant: ShowMoreButtonVariants;
  showMoreButtonLabel: string;
  showMoreButtonHref: string;
};
