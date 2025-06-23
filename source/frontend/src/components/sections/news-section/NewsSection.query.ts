// Using graphql tag approach

import { graphql } from '../../../graphql/gql';

export const newsSectionIdentifier = graphql(`
  fragment NewsSectionIdentifier on NewsSection {
    __typename
    _key
    _type
  }
`);

export const newsSectionFragment = graphql(`
  fragment NewsSectionFragment on NewsSection {
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

export const newsSectionData = graphql(`
  query NewsSectionData {
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
