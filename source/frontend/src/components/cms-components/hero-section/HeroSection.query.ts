import { graphql } from '../../../graphql';

export const heroSectionIdentifierFragment = graphql(`
  fragment HeroSectionIdentifier on HeroSection {
    __typename
    id: _id
  }
`);

export const heroSectionQuery = graphql(`
  query HeroSectionData($id: ID!) {
    data: HeroSection(id: $id) {
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
      link {
        ...ExternalLink
        ...NavigationLink
      }
      variant
    }
  }
`);
