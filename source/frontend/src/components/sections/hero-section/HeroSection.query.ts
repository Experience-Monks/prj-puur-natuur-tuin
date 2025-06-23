import { graphql } from '../../../graphql/gql';

// Using typed graphql tag approach to avoid codegen issues

export const heroSectionIdentifier = graphql(`
  fragment HeroSectionIdentifier on HeroSection {
    __typename
    _key
    _type
  }
`);

export const heroSectionFragment = graphql(`
  fragment HeroSectionFragment on HeroSection {
    _type
    _key
    title
    subtitle
    enabled
    backgroundImage {
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
    contentBlocks {
      _key
      _type
      text
      richText
      variant
      align
      maxWidth
    }
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
    variant
  }
`);

export const heroSectionQuery = graphql(`
  query HeroSectionData {
    allHeroSection {
      _id
      ...HeroSectionFragment
    }
  }
`);
