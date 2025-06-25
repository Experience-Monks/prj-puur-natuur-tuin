import { graphql } from '@/graphql';

export const navigationLinkFragment = graphql(`
  fragment NavigationLink on NavigationLink {
    __typename
    label
    ariaLabel
    component {
      ...PageContent
    }
    page {
      __typename
      id: _id
      slug {
        current
      }
    }
  }
`);
