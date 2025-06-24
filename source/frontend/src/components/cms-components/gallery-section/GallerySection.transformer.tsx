import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import type { GallerySectionIdentifierFragment } from '../../../graphql/graphql';
import { graphqlRequest } from '../../../net/graphql/graphqlRequest';
import { GallerySection } from './GallerySection';
import { gallerySectionQuery } from './GallerySection.query';
import { type GallerySectionProps } from './GallerySection.types';

export const gallerySectionTransformer = createPropsTransformer(
  GallerySection,
  async (
    identifier: GallerySectionIdentifierFragment,
    { includeDrafts }: { includeDrafts: boolean },
  ): Promise<GallerySectionProps> => {
    const { id } = identifier;

    const { data } = await graphqlRequest({
      query: gallerySectionQuery,
      variables: {
        id: id ?? '',
      },
      includeDrafts,
    });

    if (!data) {
      throw new ReferenceError(
        `Content entry "${id}" of type "GallerySection" not found or invalid.`,
      );
    }

    // Extract image URLs from the section data
    const images =
      data.images?.map((image) => (image!.asset ? (image!.asset.url ?? '') : '')).filter(Boolean) ??
      [];

    // Map the schema structure to the component props
    return {
      // Only include images if there are valid ones
      ...(images.length > 0 ? { images } : {}),
    };
  },
);
