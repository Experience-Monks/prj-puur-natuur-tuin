// Using raw GraphQL string to avoid codegen issues until backend is deployed

export const footerIdentifier = `
  fragment FooterIdentifier on Footer {
    __typename
    _id
    _type
  }
`;

export const footerFragment = `
  fragment FooterFragment on Footer {
    _id
    _type
    title
    navigationItems {
      _key
      title
      link {
        url
        reference {
          ... on Page {
            slug {
              current
            }
          }
        }
      }
    }
    copyright
    socialLinks {
      _key
      title
      url
      icon
    }
  }
`;

export const footerData = `
  query FooterData {
    footer: allFooter(limit: 1) {
      ...FooterFragment
    }
  }
`;
