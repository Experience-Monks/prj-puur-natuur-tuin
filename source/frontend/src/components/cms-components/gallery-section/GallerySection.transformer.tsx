import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import type { GallerySectionIdentifierFragment } from '../../../graphql/graphql';
import { graphqlRequest } from '../../../net/graphql/graphqlRequest';
import { type CarouselRotation } from '../../general/carousel/Carousel.enum';
import { GallerySection } from './GallerySection';
import { gallerySectionQuery } from './GallerySection.query';
import { type GallerySectionProps, type SpacingOption } from './GallerySection.types';

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
      data.carousel?.images?.map((image) => image?.asset?.url ?? '').filter(Boolean) ?? [];

    const rotation = data.carousel?.rotation as CarouselRotation | undefined;
    const marginBottom = data.marginBottom as SpacingOption | undefined;

    // Map the schema structure to the component props
    return {
      // Only include images if there are valid ones
      ...(images.length > 0 ? { images } : {}),
      // Include rotation if it exists in the data
      ...(rotation ? { rotation } : {}),
      // Include marginBottom if it exists in the data
      ...(marginBottom ? { marginBottom } : {}),
    };
  },
);
