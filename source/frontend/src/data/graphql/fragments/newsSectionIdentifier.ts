import { graphql } from '../../../graphql';

export const newsSectionIdentifier = graphql(`
  fragment NewsSectionIdentifier on NewsSection {
    __typename
    _key
    _type
  }
`);
