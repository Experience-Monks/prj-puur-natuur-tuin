import { graphql } from '@/graphql';

export const externalLinkFragment = graphql(`
  fragment ExternalLink on ExternalLink {
    __typename
    label
    url
    target
    ariaLabel
  }
`);
