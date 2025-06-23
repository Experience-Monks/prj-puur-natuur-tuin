import { graphql } from '../../../graphql/gql';

export const introSectionFragment = graphql(`
  fragment IntroSectionFragment on IntroSection {
    __typename
    _key
    _type
    _id
    title
    subtitle
    enabled
    content
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
    cta {
      text
      link {
        linkType
        internalLink {
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

export const introSectionQuery = graphql(`
  query IntroSectionData {
    allIntroSection {
      _id
      ...IntroSectionFragment
    }
  }
`);
