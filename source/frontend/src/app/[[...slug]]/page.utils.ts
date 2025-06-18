import { type Maybe } from '@graphql-tools/utils';
import type { NextPageProps } from '../../definitions';
// Import types for GraphQL responses
import type { GetPageBySlugQuery } from '../../graphql/graphql';
import { graphqlRequest } from '../../net/graphql/graphqlRequest';

// Define types for GraphQL responses - keeping for reference but using generated types now
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PageSlug = {
  current?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PageParent = {
  slug?: PageSlug;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PageType = {
  slug?: PageSlug;
  parent?: PageParent;
  landing?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PageResponse = {
  pages: Array<{
    _id?: string;
    title?: string;
    openGraph?: {
      title?: string;
      description?: string;
      image?: {
        asset?: {
          url?: string;
        };
      };
    };
    headerVariant?: string;
    content?: Array<{
      [key: string]: unknown;
      _type: string;
      _key?: string;
      // eslint-disable-next-line @typescript-eslint/naming-convention
      __typename?: string;
    }>;
    overwrittenMainNavigation?: Record<string, unknown>;
    overwrittenFooter?: Record<string, unknown>;
  }>;
};

// Keeping this for reference, but using the generated types now
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type LandingPageResponse = {
  landingPage: Array<{
    slug?: {
      current?: string;
    };
  }>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type SettingsResponse = {
  settings: {
    openGraphTitle?: string;
    openGraphDescription?: string;
    openGraphImage?: {
      asset?: {
        url?: string;
      };
    };
    fallbackImage?: {
      asset?: {
        url?: string;
      };
    };
    mainNavigation?: Record<string, unknown>;
    mainFooter?: Record<string, unknown>;
    nextPage?: string;
    previousPage?: string;
  };
};

const pageBySlugQueryString = `
  query getPageBySlug($slug: String!) {
    pages: allPage(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      openGraph {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      headerVariant
      content {
        __typename
        ... on NewsSection {
          _type
          _key
          title
          enabled
        }
        ... on ProgramSection {
          _type
          _key
          header {
            title
          }
          enabled
        }
        ... on IntroSection {
          _type
          _key
          title
          blocks {
            ... on IntroTextBlock {
              _key
              _type
              text
            }
            ... on IntroIconBlock {
              _key
              _type
              iconType
            }
          }
          content
          subtitle
          cta {
            label
            url
          }
          enabled
        }
        ... on HeroSection {
          _type
          _key
          title
          subtitle
          enabled
          backgroundImage {
            asset {
              url
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
          }
          contentBlocks {
            _key
            _type
            text
            richText
            variant
            align
            maxWidth
          }
          ctaButton {
            label
            url
          }
          variant
        }
        ... on GallerySection {
          _type
          _key
          images {
            asset {
              url
            }
          }
          enabled
        }
        ... on AboutSection {
          _type
          _key
          title
          content
          image {
            asset {
              url
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
          }
          ctaButton {
            label
            url
          }
        }
        ... on HeroSection {
          _type
          _key
          enabled
          title
          subtitle
          backgroundImage {
            asset {
              url
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
          }
          contentBlocks {
            _key
            _type
            text
            richText
            variant
            align
            maxWidth
          }
          ctaButton {
            label
            url
          }
          variant
        }
      }
      overwrittenMainNavigation {
        _id
        _type
      }
      overwrittenFooter {
        _id
        _type
      }
    }
  }
`;

const settingsQueryString = `
  query getSettings {
    settings: allSiteSettings(limit: 1) {
      openGraphTitle
      openGraphDescription
      openGraphImage {
        asset {
          url
        }
      }
      fallbackImage {
        asset {
          url
        }
      }
      mainNavigation {
        _id
        _type
      }
      mainFooter {
        _id
        _type
      }
      nextPage
      previousPage
    }
  }
`;

// Define TransformerPageData type
export type TransformerPageData = {
  headerVariant?: string;
  fallbackImage?: string;
  globalLabels?: {
    nextPage?: string;
    previousPage?: string;
  };
};

/**
 * Helper method to make sure we stitch all the parent page slugs together so we end up with a URL that works in the browser.
 *
 * @param pages
 */
export function getFullPageSegments(pages: Array<PageType>): Array<Array<string>> {
  const paths: Array<Array<string>> = [];

  function buildPathSegments(page: PageType): Array<string> {
    const segments: Array<string> = [page.slug?.current ?? ''];

    if (page.parent) {
      // Find the actual parent page in the root level array because we might need to go up more than one level!
      const parentPage = pages.find(({ slug }) => slug?.current === page.parent?.slug?.current);

      if (parentPage) {
        // Add the segments to the beginning of the existing list
        segments.unshift(...buildPathSegments(parentPage));
      }
    }

    return segments;
  }

  for (const page of pages) {
    if (page.landing) {
      paths.push([page.slug?.current ?? '']);
    } else {
      paths.push(buildPathSegments(page));
    }
  }

  return paths;
}

export async function getLandingPageSlug(): Promise<string> {
  return 'homepage';
}

/**
 * Helper method to retrieve the page data for a next page
 *
 * @param slug
 * @param includeDrafts
 */
export async function getPageData({
  params: { slug = [''] },
}: NextPageProps): Promise<PageResponse['pages'][number] | undefined> {
  // If we don't have a slug, we need to get the landing page slug
  // Try both 'homepage' and 'puurnatuurtuin' as fallbacks
  let pageSlug = slug[0] ?? '';

  if (!pageSlug) {
    // Try to get the landing page first
    const landingPageSlug = await getLandingPageSlug();
    // Use fallback if landingPageSlug is null or undefined
    pageSlug = landingPageSlug ?? 'puurnatuurtuin';
  }

  // Retrieve the page data for the given slug
  const { pages } = await graphqlRequest<GetPageBySlugQuery>({
    query: pageBySlugQueryString,
    variables: { slug: pageSlug },
  });

  // If we couldn't find the page with the current slug, try the fallback
  if (pages.length === 0) {
    if (pageSlug === 'homepage') {
      // Try 'puurnatuurtuin' as a fallback
      const { pages: fallbackPages } = await graphqlRequest<GetPageBySlugQuery>({
        query: pageBySlugQueryString,
        variables: { slug: 'puurnatuurtuin' },
      });
      return fallbackPages.length > 0 ? fallbackPages[0] : undefined;
    }

    if (pageSlug === 'puurnatuurtuin') {
      // Try 'homepage' as a fallback
      const { pages: fallbackPages } = await graphqlRequest<GetPageBySlugQuery>({
        query: pageBySlugQueryString,
        variables: { slug: 'homepage' },
      });
      return fallbackPages.length > 0 ? fallbackPages[0] : undefined;
    }
  }

  return pages[0];
}

/**
 * Helper method to retrieve the global page data object
 * @param options
 */
export async function getGlobalPageData(
  options: Partial<{ headerVariant: Maybe<string> }> = {},
): Promise<{
  pageData: TransformerPageData;
  header: Record<string, unknown>;
  footer: Record<string, unknown>;
}> {
  // Use a more specific type for the settings response that matches the actual schema
  const response = await graphqlRequest<{
    settings: Array<{
      openGraphTitle?: string | null;
      openGraphDescription?: string | null;
      openGraphImage?: { asset?: { url?: string | null } | null } | null;
      fallbackImage?: { asset?: { url?: string | null } | null } | null;
      mainNavigation?: Record<string, unknown> | null;
      mainFooter?: Record<string, unknown> | null;
      nextPage?: string | null;
      previousPage?: string | null;
    }>;
  }>({
    query: settingsQueryString,
  });

  // Get the first settings object (there should only be one)
  const settingsItem = response.settings[0] ?? {};

  // Map the settings fields to our TransformerPageData structure
  const pageData: TransformerPageData = {
    headerVariant: options.headerVariant ?? '',
    fallbackImage: settingsItem.fallbackImage?.asset?.url ?? '',
    globalLabels: {
      nextPage: settingsItem.nextPage ?? '',
      previousPage: settingsItem.previousPage ?? '',
    },
  };

  // Get navigation and footer from settings
  return {
    pageData,
    header: settingsItem.mainNavigation ?? {},
    footer: settingsItem.mainFooter ?? {},
  };
}
