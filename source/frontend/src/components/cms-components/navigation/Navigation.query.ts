import { graphql } from '../../../graphql';

export const navigationIdentifier = graphql(`
  fragment NavigationIdentifier on Navigation {
    __typename
    id: _id
    _type
  }
`);

export const navigationQuery = graphql(`
  query NavigationData($id: ID!) {
    data: Navigation(id: $id) {
      _type
      _key
      title
      logo {
        asset {
          url
        }
      }
      links {
        ...NavigationLink
      }
    }
  }
`);
