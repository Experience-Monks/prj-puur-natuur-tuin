// Using raw GraphQL string to avoid codegen issues until backend is deployed

export const programSectionIdentifier = `
  fragment ProgramSectionIdentifier on ProgramSection {
    __typename
    _key
    _type
  }
`;

export const programSection = `
  query ProgramSection($key: String!) {
    # Query for the program section by key
    # This now needs to be part of the page content query
    # as standalone section queries are no longer supported
    allPage {
      content {
        ... on ProgramSection {
          _type
          _key
          title
          enabled
          selectionType
          maxItems
          programItems {
            ... on Reference {
              _ref
            }
          }
        }
      }
    }
  }
`;

export const programSectionData = `
  query ProgramSectionData {
    allProgram(sort: [{datetime: DESC}]) {
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
`;
