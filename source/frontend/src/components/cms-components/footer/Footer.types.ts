import { type CmsLinkProps } from '../../../utils/link.utils';

export type FooterVariant = 'darkBackground' | 'brightBackground';

export type FooterProps = {
  links?: Array<CmsLinkProps>;
  footerVariant?: FooterVariant;
  copyrightLeft?: string;
  copyrightRight?: string;
};
