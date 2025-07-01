import type { MutableRefs } from '@mediamonks/react-kit';
import type { CmsLinkProps } from '../../../utils/link.utils';

export type News = {
  id: string;
  title: string;
  date: string;
  icon: string;
  link: CmsLinkProps;
};

export type NewsSectionRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export type NewsSectionProps = {
  title: string;
  subtitle?: string;
  news: Array<News>;
  link?: CmsLinkProps;
};

export type NewsSectionTemplateProps = NewsSectionProps & {
  refs: NewsSectionRefs;
};
