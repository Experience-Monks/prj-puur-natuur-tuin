import { type Maybe } from '@graphql-tools/utils';
import type { NextPageProps } from '../../definitions';
import type { GetSettingsQueryQuery, PageQueryQuery } from '../../graphql/graphql';
import { graphqlRequest } from '../../net/graphql/graphqlRequest';
import { getSettingsQuery, pageQuery } from './page.queries';

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
export function getFullPageSegments<
  T extends Array<{
    slug?: { current?: string };
    parent?: { slug?: { current?: string } };
    landing?: boolean;
  }>,
>(pages: T): Array<Array<string>> {
  const paths: Array<Array<string>> = [];

  function buildPathSegments(page: T[number]): Array<string> {
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
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
}: NextPageProps): Promise<PageQueryQuery['pages'][number] | undefined> {
  // If we don't have a slug, we need to get the landing page slug
  // Try both 'homepage' and 'puurnatuurtuin' as fallbacks
  let pageSlug = slug[0] ?? '';

  if (!pageSlug) {
    // Try to get the landing page first
    const landingPageSlug = await getLandingPageSlug();
    // Use fallback if landingPageSlug is null or undefined
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    pageSlug = landingPageSlug ?? 'puurnatuurtuin';
  }

  // Retrieve the page data for the given slug
  const { pages } = await getPageBySlug(pageSlug);

  // If we couldn't find the page with the current slug, try the fallback
  if (pages.length === 0) {
    if (pageSlug === 'homepage') {
      // Try 'puurnatuurtuin' as a fallback
      const { pages: fallbackPages } = await getPageBySlug('puurnatuurtuin');
      return fallbackPages.length > 0 ? fallbackPages[0] : undefined;
    }

    if (pageSlug === 'puurnatuurtuin') {
      // Try 'homepage' as a fallback
      const { pages: fallbackPages } = await getPageBySlug('homepage');
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
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  header: GetSettingsQueryQuery['settings'][number]['mainNavigation'] | NonNullable<unknown>;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  footer: GetSettingsQueryQuery['settings'][number]['mainFooter'] | NonNullable<unknown>;
}> {
  // Use a more specific type for the settings response that matches the actual schema
  const response = await getSettings();

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

export async function getPageBySlug(slug: string): Promise<PageQueryQuery> {
  return graphqlRequest({
    query: pageQuery,
    variables: { slug },
  });
}

export async function getSettings(): Promise<GetSettingsQueryQuery> {
  return graphqlRequest({
    query: getSettingsQuery,
  });
}
