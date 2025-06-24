// Using raw GraphQL string to avoid codegen issues until backend is deployed

export const stickyNavigationIdentifier = `
  fragment StickyNavigationIdentifier on Navigation {
    __typename
    _key
    _type
  }
`;

export const stickyNavigation = `
  query StickyNavigation($key: String!) {
    allNavigation(where: {_key: {eq: $key}}) {
      _type
      _key
      title
      logo {
        asset {
          url
        }
      }
      links {
        label
        sectionId
      }
    }
  }
`;
