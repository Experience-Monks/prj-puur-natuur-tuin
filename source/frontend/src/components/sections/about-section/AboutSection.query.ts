import { graphql } from '../../../graphql';

export const aboutSectionIdentifierFragment = graphql(`
  fragment AboutSectionIdentifier on AboutSection {
    __typename
    id: _id
  }
`);

export const aboutSectionQuery = graphql(`
  query AboutSectionData($id: ID!) {
    data: AboutSection(id: $id) {
      _type
      _key
      title
      content
      image {
        asset {
          url
          metadata {
            dimensions {
              width
              height
            }
          }
        }
      }
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
