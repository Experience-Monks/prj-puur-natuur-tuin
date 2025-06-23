import { type ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const authorizationLink = (): ApolloLink =>
  setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
  }));
