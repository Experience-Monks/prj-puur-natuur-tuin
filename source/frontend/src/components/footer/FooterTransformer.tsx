import type { FooterCms, FooterProps } from './Footer.types';

export function FooterTransformer(footerData: FooterCms): Omit<FooterProps, 'refs'> {
  // If enabled is explicitly set to false, don't render this footer
  if (footerData.enabled === false) {
    return {};
  }

  // Use the data we have directly instead of trying to fetch more
  const completeFooterData = footerData;

  // Transform the CMS data to the component props format
  const result = {
    links:
      completeFooterData.navigationItems?.map((item) => {
        // Get the URL (either direct URL or from reference)
        const href =
          item.link?.externalUrl ??
          (item.link?.page?.slug?.current ? `/${item.link.page.slug.current}` : '#');

        return {
          label: item.title ?? '',
          href,
        };
      }) ?? [],
    socialLinks:
      completeFooterData.socialLinks?.map((link) => ({
        label: link.label ?? '',
        href: link.url ?? '#',
        icon: undefined,
      })) ?? [],
    copyright: completeFooterData.copyright,
  };

  return result;
}
