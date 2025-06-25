import { HttpLink } from '@apollo/client';

export const handleHttpRequests = (includeDrafts = false): HttpLink =>
  new HttpLink({
    uri: `https://${process.env.SANITY_API_PROJECT_ID}.api.sanity.io/${process.env.SANITY_API_VERSION}/graphql/${process.env.SANITY_API_DATASET}/${process.env.SANITY_API_TAG}`,
  });
