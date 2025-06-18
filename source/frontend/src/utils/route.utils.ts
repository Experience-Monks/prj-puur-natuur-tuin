import { getFullPageSegments } from '../app/[[...slug]]/page.utils';
import { type Route } from '../data/enums/Route';
import { graphqlRequest } from '../net/graphql/graphqlRequest';

type PagesResponse = {
  pages: Array<{
    slug?: {
      current?: string;
    };
    parent?: {
      slug?: {
        current?: string;
      };
    };
    landing?: boolean;
  }>;
};

// Raw GraphQL query for all pages
const allPagesQueryString = `
  query getAllPages {
    pages: allPage {
      slug {
        current
      }
      parent {
        slug {
          current
        }
      }
      landing
    }
  }
`;

export function getDynamicRoutePath(route: Route, parameters: Record<string, string> = {}): string {
  let result = route.toString();

  for (const [key, value] of Object.entries(parameters)) {
    result = result.replace(`[${key}]`, value);
  }

  return result;
}

/**
 * Retrieves all navigation slugs for dynamic routing
 * This is used to generate static paths for all pages
 */
export async function getNavigationSlugs(): Promise<Array<Array<string>>> {
  try {
    const { pages } = await graphqlRequest<PagesResponse>({
      query: allPagesQueryString,
    });

    return getFullPageSegments(pages);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching navigation slugs:', error);
    return [];
  }
}
