import { graphql } from '../../../graphql';

export const introSectionIdentifier = graphql(`
  fragment IntroSectionIdentifier on IntroSection {
    __typename
    _key
    _type
  }
`);
