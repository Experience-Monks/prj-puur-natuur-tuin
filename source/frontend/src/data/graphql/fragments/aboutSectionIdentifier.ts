import { graphql } from '../../../graphql';

export const aboutSectionIdentifier = graphql(`
  fragment AboutSectionIdentifier on AboutSection {
    __typename
    _key
    _type
  }
`);
