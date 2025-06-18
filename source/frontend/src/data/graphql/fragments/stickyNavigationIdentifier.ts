import { graphql } from '../../../graphql';

export const stickyNavigationIdentifier = graphql(`
  fragment StickyNavigationIdentifier on StickyNavigation {
    __typename
    _key
    _type
  }
`);
