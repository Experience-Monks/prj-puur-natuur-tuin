import { graphql } from '../../../graphql';

export const footerIdentifier = graphql(`
  fragment FooterIdentifier on Footer {
    __typename
    id: _id
    _type
  }
`);

export const footerQuery = graphql(`
  query FooterData($id: ID!) {
    data: Footer(id: $id) {
      _id
      _type
      title
      navigationItems {
        _key
        title
        link {
          externalUrl
          page {
            slug {
              current
            }
          }
        }
      }
      copyright
      socialLinks {
        _key
        label
        url
      }
    }
  }
`);
