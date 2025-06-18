// Using raw GraphQL string to avoid codegen issues

export const introSectionIdentifier = `
  fragment IntroSectionIdentifier on IntroSection {
    __typename
    _key
    _type
  }
`;

export const introSectionData = `
  query IntroSectionData {
    allIntroSection {
      _type
      _key
      title
      enabled
      content
      image {
        asset {
          url
        }
      }
    }
  }
`;
