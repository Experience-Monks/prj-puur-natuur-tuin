import { graphql } from '../../../graphql';

export const getAllPagesQuery = graphql(`
  query getAllPages {
    allPage {
      _id
      slug {
        current
      }
      landing
      parent {
        slug {
          current
        }
      }
    }
  }
`);
