import { graphql } from '../../../graphql';

export const gallerySectionIdentifierFragment = graphql(`
  fragment GallerySectionIdentifier on GallerySection {
    __typename
    id: _key
  }
`);

export const gallerySectionQuery = graphql(`
  query GallerySectionData($id: ID!) {
    data: GallerySection(id: $id) {
      _type
      _key
      marginBottom
      carousel {
        images {
          asset {
            url
          }
        }
        rotation
      }
    }
  }
`);
