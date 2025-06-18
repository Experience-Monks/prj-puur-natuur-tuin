// Using raw GraphQL string to avoid codegen issues

export const heroSectionIdentifier = `
  fragment HeroSectionIdentifier on HeroSection {
    __typename
    _key
    _type
  }
`;

export const heroSectionFragment = `
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
    ctaButton {
      label
      url
    }
    variant
  }
`;

export const heroSectionData = `
  query HeroSectionData {
    allHeroSection {
      _id
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
      ctaButton {
        label
        url
      }
      variant
    }
  }
`;
