// Using graphql tag approach

import { graphql } from '../../../graphql/gql';

export const programSectionIdentifier = graphql(`
  fragment ProgramSectionIdentifier on ProgramSection {
    __typename
    _key
    _type
  }
`);

export const programSectionFragment = graphql(`
  fragment ProgramSectionFragment on ProgramSection {
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
`);

export const programSectionData = graphql(`
  query ProgramSectionData {
    allProgram(sort: { datetime: DESC }) {
      _id
      title
      datetime
      description
      image {
        asset {
          url
        }
      }
    }
  }
`);
