import type { MutableRefs } from '@mediamonks/react-kit';

export type NavigationProps = {
  title?: string;
  links: Array<{
    label: string;
    href: string;
    isActive?: boolean;
  }>;
  logo?: {
    asset?: {
      url?: string | null;
    };
  };
};

export type NavigationRefs = MutableRefs<{
  self: HTMLElement;
}>;
