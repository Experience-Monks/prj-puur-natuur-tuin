import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print, type DocumentNode } from 'graphql';

// Define a more flexible query type to handle different GraphQL query formats
export type GraphQlQuery<Result, Variables> =
  | TypedDocumentNode<Result, Variables>
  | {
      loc?: { source?: { body?: string } };
      definitions?: Array<unknown>;
      kind?: string;
      toString(): string;
    }
  | string;

export type Options<Result, Variables> = {
  query: GraphQlQuery<Result, Variables>;
  variables?: Variables;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
  environment?: string;
};

/**
 * Check if a query object is a valid DocumentNode that can be printed
 */
function isDocumentNode(query: unknown): query is DocumentNode {
  return (
    typeof query === 'object' &&
    query !== null &&
    'kind' in query &&
    (query as { kind: string }).kind === 'Document'
  );
}

/**
 * GraphQL request utility that works in both server and client components
 */
export async function graphqlRequest<Result, Variables = Record<string, never>>({
  query,
  variables,
  includeDrafts = process.env.NEXT_PUBLIC_CMS_INCLUDE_DRAFTS === 'true',
  excludeInvalid = true,
  environment,
}: Options<Result, Variables>): Promise<Result> {
  const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL ?? process.env.CMS_API_URL;
  const apiToken = process.env.NEXT_PUBLIC_CMS_API_TOKEN ?? process.env.CMS_API_TOKEN;

  if (!apiUrl) {
    throw new Error('CMS_API_URL is not set!');
  }

  // Prepare headers for the GraphQL request
  const headers: HeadersInit = {};

  // Add content type header
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers['Content-Type'] = 'application/json';

  // Add authorization header if token is available
  if (apiToken) {
    headers.Authorization = `Bearer ${apiToken}`;
  }

  // Add draft mode header if includeDrafts is true
  if (includeDrafts) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers['X-Sanity-Draft'] = 'true';
  }

  // Add exclude invalid header if excludeInvalid is true
  if (excludeInvalid) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers['X-Exclude-Invalid'] = 'true';
  }

  // Add environment header if environment is provided
  if (environment) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers['X-Environment'] = environment;
  }

  // Log the endpoint and headers for debugging
  // eslint-disable-next-line no-console
  console.log('[GraphQL] Using endpoint:', apiUrl);
  // eslint-disable-next-line no-console
  console.log('[GraphQL] Using headers:', headers);
  // eslint-disable-next-line no-console
  console.log('[GraphQL] Query object type:', typeof query);

  try {
    // Extract query string based on the query type
    let queryString = '';

    if (typeof query === 'string') {
      queryString = query;
    } else if (typeof query === 'object') {
      try {
        // First try to use the print function from graphql package if it's a valid DocumentNode
        if (isDocumentNode(query)) {
          queryString = print(query);
        } else {
          throw new Error('Query is not a valid DocumentNode');
        }
      } catch (printError) {
        // If print fails, fall back to other methods
        // eslint-disable-next-line no-console
        console.warn('[GraphQL] Failed to print query with graphql.print:', printError);

        // Try different ways to extract the query string
        if (query.loc?.source?.body) {
          queryString = query.loc.source.body;
        } else if (typeof query.toString === 'function') {
          // Try using toString() if available
          // eslint-disable-next-line @typescript-eslint/no-base-to-string
          queryString = query.toString();
        } else if (Object.hasOwn(query, 'document')) {
          // Handle the case where query is a document object with a document property
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { document } = query as any;
          if (document?.loc?.source?.body) {
            queryString = document.loc.source.body;
          }
        }

        // If we still don't have a query string, try to stringify the entire object
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!queryString && query) {
          try {
            // Safely stringify the query object
            const stringified = typeof query === 'object' ? JSON.stringify(query) : String(query);

            // Try to extract the query from the stringified object
            const queryRegex = /"query":"(?<queryContent>[^"]+)"/u;
            const execResult = queryRegex.exec(stringified);
            if (execResult?.groups?.queryContent) {
              queryString = execResult.groups.queryContent
                .replaceAll('\\n', '\n')
                .replaceAll('\\"', '"');
            }
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('[GraphQL] Failed to stringify query:', error);
          }
        }
      }
    }

    if (!queryString) {
      throw new Error('Failed to extract GraphQL query string');
    }

    // Log the query for debugging
    // eslint-disable-next-line no-console
    console.log('[GraphQL] Query string:', queryString);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: queryString,
        variables,
      }),
      next: {
        // Revalidate cache after 60 seconds
        revalidate: 60,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      // eslint-disable-next-line no-console
      console.error('[GraphQL] Response error:', errorText);
      throw new Error(`GraphQL request failed: ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      // eslint-disable-next-line no-console
      console.error('[GraphQL] Request had errors:', result.errors);
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    return result.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[GraphQL] Request failed:', error);
    throw error;
  }
}
