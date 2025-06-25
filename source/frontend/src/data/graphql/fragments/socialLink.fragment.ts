import { graphql } from '@/graphql';

export const socialLinkFragment = graphql(`
  fragment SocialLink on SocialLink {
    __typename
    label
    url
    ariaLabel
    icon
  }
`);
