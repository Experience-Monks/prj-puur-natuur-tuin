import { graphql } from '../../../graphql';

export const introSectionIdentifierFragment = graphql(`
  fragment IntroSectionIdentifier on IntroSection {
    __typename
    id: _id
  }
`);

export const introSectionQuery = graphql(`
  query IntroSectionData($id: ID!) {
    data: IntroSection(id: $id) {
      _type
      _key
      title
      blocks {
        ... on IntroTextBlock {
          _key
          _type
          text
        }
        ... on IntroIconBlock {
          _key
          _type
          iconType
        }
      }
      content
      subtitle
      cta {
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
      showButton
      enabled
    }
  }
`);
