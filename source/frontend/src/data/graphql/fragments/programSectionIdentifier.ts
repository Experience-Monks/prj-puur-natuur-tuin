import { graphql } from '../../../graphql';

export const programSectionIdentifier = graphql(`
  fragment ProgramSectionIdentifier on ProgramSection {
    __typename
    _key
    _type
  }
`);
