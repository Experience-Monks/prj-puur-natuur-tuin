import { graphql } from '../../../graphql';

export const programSectionIdentifierFragment = graphql(`
  fragment ProgramSectionIdentifier on ProgramSection {
    __typename
    id: _id
  }
`);

export const programSectionQuery = graphql(`
  query ProgramSectionData($id: ID!) {
    data: ProgramSection(id: $id) {
      _type
      _key
      header {
        title
      }
      maxItems
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
