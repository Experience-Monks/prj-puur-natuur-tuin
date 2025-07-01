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
      maxItems
      link {
        ...ExternalLink
        ...NavigationLink
      }
    }
    allNews(sort: { date: DESC }) {
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
`);
