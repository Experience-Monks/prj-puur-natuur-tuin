// Match the existing schema structure
export type FooterCms = {
  _id?: string;
  _type?: string;
  title?: string;
  navigationItems?: Array<{
    _key?: string;
    title?: string;
    link?: {
      page?: {
        _ref?: string;
        _type?: string;
        slug?: {
          current?: string;
        };
        title?: string;
      };
      externalUrl?: string;
    };
  }>;
  copyright?: string;
  socialLinks?: Array<{
    _key?: string;
    label?: string;
    url?: string;
  }>;
  enabled?: boolean;
};

export type FooterProps = {
  links?: Array<{
    label: string;
    href: string;
  }>;
  socialLinks?: Array<{
    label: string;
    href: string;
    icon?: string;
  }>;
  copyright?: string;
};
