import { graphql } from '../../../graphql';

export const gallerySectionIdentifier = graphql(`
  fragment GallerySectionIdentifier on GallerySection {
    __typename
    _key
    _type
  }
`);
