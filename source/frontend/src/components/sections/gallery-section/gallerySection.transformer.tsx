import type { SectionTypeName } from 'src/data/enum/SectionTypeName';

export interface GallerySectionCms {
  _type: SectionTypeName.GallerySection;
  _key?: string;
  images?: Array<{
    asset?: {
      url?: string;
    } | null;
  }>;
  enabled?: boolean;
}

export interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  images?: Array<string>;
  refs?: {
    container?: React.RefObject<HTMLDivElement>;
  };
}

export async function gallerySectionTransformer(
  section: GallerySectionCms,
): Promise<Omit<GallerySectionProps, 'refs'>> {
  // If enabled is explicitly set to false, don't render this section
  if (section.enabled === false) {
    return {};
  }

  // Extract image URLs from the section data
  const images =
    section.images?.map((image) => (image.asset ? (image.asset.url ?? '') : '')).filter(Boolean) ??
    [];

  // Map the schema structure to the component props
  const result = {
    // Only include images if there are valid ones
    ...(images.length > 0 ? { images } : {}),
  };

  return result;
}
