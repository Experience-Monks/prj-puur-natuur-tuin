import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  type NormalizedCacheObject,
} from '@apollo/client';
import { applyRetryLimit } from './links/applyRetryLimit';
import { authorizationLink } from './links/authorization';
import { handleHttpRequests } from './links/handleHttpRequests';

const apolloClientInstances: {
  default: ApolloClient<NormalizedCacheObject> | null;
  preview: ApolloClient<NormalizedCacheObject> | null;
} = {
  default: null,
  preview: null,
};

export const apolloClient = (includeDrafts = false): ApolloClient<NormalizedCacheObject> => {
  if (includeDrafts) {
    apolloClientInstances.preview ??= new ApolloClient({
      cache: new InMemoryCache(),
      link: ApolloLink.from([authorizationLink(), applyRetryLimit, handleHttpRequests(true)]),
      assumeImmutableResults: true,
      defaultOptions: {
        query: {
          ...(typeof window === 'undefined' && { fetchPolicy: 'no-cache' }),
          errorPolicy: 'all',
        },
      },
    });

    return apolloClientInstances.preview;
  }

  apolloClientInstances.default ??= new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([authorizationLink(), applyRetryLimit, handleHttpRequests(false)]),
    assumeImmutableResults: true,
    defaultOptions: {
      query: {
        ...(typeof window === 'undefined' && { fetchPolicy: 'no-cache' }),
        errorPolicy: 'all',
      },
    },
  });

  return apolloClientInstances.default;
};
