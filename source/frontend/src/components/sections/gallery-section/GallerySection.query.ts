// Using raw GraphQL string to avoid codegen issues

export const gallerySectionIdentifier = `
  fragment GallerySectionIdentifier on GallerySection {
    __typename
    _key
    _type
  }
`;

export const gallerySectionData = `
  query GallerySectionData {
    allGallerySection {
      _type
      _key
      enabled
      images {
        asset {
          url
        }
      }
    }
  }
`;
