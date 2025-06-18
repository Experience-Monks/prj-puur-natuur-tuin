// Using raw GraphQL string to avoid codegen issues until backend is deployed

export const newsSectionIdentifier = `
  fragment NewsSectionIdentifier on NewsSection {
    __typename
    _key
    _type
  }
`;

export const newsSectionFragment = `
  fragment NewsSectionFragment on NewsSection {
    _type
    _key
    title
    enabled
    selectionType
    maxItems
    newsItems {
      ... on Reference {
        _ref
      }
    }
  }
`;

export const newsSectionData = `
  query NewsSectionData {
    allNews(sort: [{_createdAt: DESC}]) {
      _id
      title
      date
      icon {
        asset {
          url
        }
      }
    }
  }
`;
