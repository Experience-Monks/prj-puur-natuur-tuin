// Using raw GraphQL string to avoid codegen issues until backend is deployed

export const aboutSectionIdentifier = `
  fragment AboutSectionIdentifier on AboutSection {
    __typename
    _key
    _type
  }
`;

export const aboutSectionFragment = `
  fragment AboutSectionFragment on AboutSection {
    _type
    _key
    title
    content
    enabled
    image {
      asset {
        url
      }
    }
    ctaButton {
      label
      url
    }
  }
`;

export const aboutSectionData = `
  query AboutSectionData {
    allSiteSettings {
      aboutSection {
        _type
        _key
        title
        content
        image {
          asset {
            url
          }
          alt
        }
        ctaButton {
          label
          url
        }
      }
    }
  }
`;
