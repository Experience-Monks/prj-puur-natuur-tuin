import type { RefObject } from 'react';

export type News = {
  id: string;
  title: string;
  date: string;
  icon: string;
};

export type NewsSectionRefs = {
  self: RefObject<HTMLDivElement>;
};

export type NewsSectionProps = {
  title: string;
  subtitle?: string;
  news: Array<News>;
  showButton?: boolean;
  ctaLabel?: string;
  ctaUrl?: string;
};
