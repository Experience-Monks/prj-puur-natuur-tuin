import { graphql } from '../../../graphql';

export const getLandingPageQuery = graphql(`
  query getLandingPage {
    landingPage: allPage(where: { landing: { eq: true } }) {
      slug {
        current
      }
    }
  }
`);
