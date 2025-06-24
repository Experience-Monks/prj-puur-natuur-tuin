import { graphql } from '../../../graphql';

export const newsSectionIdentifierFragment = graphql(`
  fragment NewsSectionIdentifier on NewsSection {
    __typename
    id: _id
  }
`);

export const newsSectionQuery = graphql(`
  query NewsSectionData($id: ID!) {
    data: NewsSection(id: $id) {
      _type
      _key
      header {
        title
      }
      enabled
      showButton
      ctaButton {
        text
        link {
          linkType
          internalLink {
            _id
            slug {
              current
            }
          }
          externalUrl
          emailAddress
        }
      }
    }
  }
`);
