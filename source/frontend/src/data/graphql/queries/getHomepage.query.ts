// This file is deprecated as we're now using a page with landing flag for the homepage
// See the landingPageQueryString in page.utils.ts for the current implementation

// Using raw GraphQL string to avoid codegen issues
export const getLandingPageQuery = `
  query getLandingPage {
    landingPage: allPage(where: { landing: { eq: true } }) {
      _id
      title
      slug {
        current
      }
      content {
        __typename
        ... on NewsSection {
          _type
          _key
          title
          enabled
        }
        ... on ProgramSection {
          _type
          _key
          title
          enabled
        }
        ... on IntroSection {
          _type
          _key
          title
          enabled
        }
        ... on GallerySection {
          _type
          _key
          enabled
        }
        ... on AboutSection {
          _type
          _key
          title
          enabled
        }
      }
    }
  }
`;
