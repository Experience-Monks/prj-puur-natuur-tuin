import { type Maybe } from '@graphql-tools/utils';
import { notFound } from 'next/navigation';
import type { NextPageProps } from '../../definitions';
import type {
  GetLandingPageQuery,
  GetPageBySlugQuery,
  GetSettingsQueryQuery,
  PageDataFragment,
} from '../../graphql/graphql';
import { graphqlRequest } from '../../net/graphql/graphqlRequest';
import { getLandingPageQuery, getPageBySlugQuery, getSettingsQuery } from './page.queries';

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

/**
 * Helper method to retrieve the page data for a next page
 *
 * @param slug
 * @param includeDrafts
 */
export async function getPageData({
  params,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
}: NextPageProps): Promise<PageDataFragment | undefined> {
  const pageSlug = params.slug?.[0] ?? '';

  // Retrieve the page data for the given slug
  const { pages } =
    !pageSlug || pageSlug === '' ? await getLandingPage() : await getPageBySlug(pageSlug);

  // If we couldn't find the page with the current slug, try the fallback
  if (pages.length === 0) {
    notFound();
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

export async function getLandingPage(): Promise<GetLandingPageQuery> {
  return graphqlRequest({
    query: getLandingPageQuery,
  });
}

export async function getPageBySlug(slug: string): Promise<GetPageBySlugQuery> {
  return graphqlRequest({
    query: getPageBySlugQuery,
    variables: { slug },
  });
}

export async function getSettings(): Promise<GetSettingsQueryQuery> {
  return graphqlRequest({
    query: getSettingsQuery,
  });
}
