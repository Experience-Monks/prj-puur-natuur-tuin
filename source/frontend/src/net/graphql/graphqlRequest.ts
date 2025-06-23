import { type OperationVariables } from '@apollo/client';
import type { DefaultContext as ApolloDefaultContext } from '@apollo/client/core/types';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { array, isString, shape } from 'isntnt';
import { apolloClient } from './apolloClient';

declare module '@apollo/client' {
  export interface DefaultContext {
    headers: Record<string, string>;
  }
}

const isErrorResponseData = shape({
  errors: array(
    shape({
      message: isString,
    }),
  ),
});

export type Options<Result, Variables> = {
  query: TypedDocumentNode<Result, Variables>;
  includeDrafts?: boolean;
};

export type GraphqlRequestOptions<Result, Variables extends OperationVariables> =
  Variables extends Record<string, never>
    ? Options<Result, Variables> & {
        variables?: never;
        context?: Partial<ApolloDefaultContext>;
      }
    : Options<Result, Variables> & {
        variables: Variables;
        context?: Partial<ApolloDefaultContext>;
      };

if (process.env.NODE_ENV !== 'development') {
  loadDevMessages();
  loadErrorMessages();
}

export async function graphqlRequest<Result, Variables extends OperationVariables>({
  query,
  variables,
  context,
  includeDrafts,
}: GraphqlRequestOptions<Result, Variables>): Promise<Result> {
  const headers: Record<string, string> = {};

  const result = await apolloClient(includeDrafts).query({
    query,
    variables,
    context: {
      headers,
      ...context,
    },
  });

  if (isErrorResponseData(result)) {
    // eslint-disable-next-line no-console
    console.log(
      `GraphQL response includes errors`,
      result.errors.map((error) => error.message),
    );
  }

  return result.data;
}
