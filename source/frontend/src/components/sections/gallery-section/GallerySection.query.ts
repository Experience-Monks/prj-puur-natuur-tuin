import { graphql } from '../../../graphql';

export const gallerySectionIdentifierFragment = graphql(`
  fragment GallerySectionIdentifier on GallerySection {
    __typename
    id: _key
  }
`);

export const gallerySectionQuery = graphql(`
  query GallerySectionData($id: ID!) {
    data: Gallery(id: $id) {
      _type
      _key
      images {
        asset {
          url
        }
      }
    }
  }
`);
