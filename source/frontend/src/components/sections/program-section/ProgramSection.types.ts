import type { MutableRefs } from '@mediamonks/react-kit';

export type ProgramItem = {
  id: string;
  title: string;
  date: string;
  month: string;
  time: string;
  image: string;
  description: string;
};

export type ProgramSectionProps = {
  title: string;
  programs: Array<ProgramItem>;
  ctaLabel?: string;
  ctaUrl?: string;
  showButton?: boolean;
};

export type ProgramSectionRefs = MutableRefs<{
  self: HTMLDivElement;
}>;
