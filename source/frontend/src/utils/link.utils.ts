import { type ExternalLink, type NavigationLink, type SocialLink } from '../graphql/graphql';

export type CmsLinkProps = {
  href: string;
  children: string;
  target?: string;
  ariaLabel?: string;
  preventScroll?: boolean;
};

/**
 * Parses a link object and returns the appropriate URL string based on its type.
 *
 * @param link - Either an ExternalLink or NavigationLink object
 * @returns For external links, returns the URL string; for internal links, returns a path constructed from page path and slug
 *
 * @example
 * // Returns 'https://example.com' for external link
 * parseLink({ __typename: 'ExternalLink', url: 'https://example.com' })
 *
 * // Returns '/path/to/page' for internal link
 * parseLink({ __typename: 'NavigationLink', page: { path: [{ name: 'path' }, { name: 'to' }], slug: { current: 'page' } } })
 */
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export function parseLink(link: ExternalLink | NavigationLink | SocialLink): string {
  if (isExternalLink(link) || isSocialLink(link)) {
    return link.url ?? '';
  }

  return link.page?.slug?.current ?? '';
}

/**
 * Creates an internal URL path by combining path segments and a slug.
 *
 * @param path - Array of path segments, each containing an optional name property
 * @param slug - Optional URL slug to append to the path
 * @returns A URL path string starting with '/' and joining all valid segments with '/'
 *
 * @example
 * // Returns '/segment1/segment2/slug'
 * createInternalLink([
 *   { name: 'segment1', __typename: 'PathSegment' },
 *   { name: 'segment2', __typename: 'PathSegment' }
 * ], 'slug')
 */
export function createInternalLink(
  path?: // eslint-disable-next-line @typescript-eslint/naming-convention
  Array<{ name?: string | null | undefined; __typename: 'PathSegment' } | null> | null,
  slug?: string | null,
): string {
  const segments = [...(path ?? []).map((segment) => segment?.name), slug]
    .filter(Boolean)
    .join('/');

  return segments ? `/${segments}/` : '/';
}

export function isExternalLink(
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  link: ExternalLink | NavigationLink | SocialLink,
): link is ExternalLink {
  // eslint-disable-next-line no-underscore-dangle
  return link.__typename === 'ExternalLink';
}

export function isNavigationLink(
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  link: ExternalLink | NavigationLink | SocialLink,
): link is NavigationLink {
  // eslint-disable-next-line no-underscore-dangle
  return link.__typename === 'NavigationLink';
}

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export function isSocialLink(link: ExternalLink | NavigationLink | SocialLink): link is SocialLink {
  // eslint-disable-next-line no-underscore-dangle
  return link.__typename === 'SocialLink';
}
