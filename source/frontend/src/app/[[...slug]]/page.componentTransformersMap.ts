/* No direct transformer imports */
/* eslint-disable @typescript-eslint/naming-convention */
import { type ComponentPropsTransformer } from './page.transformers';

export type UnknownPropsTransformMap = Record<
  string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ComponentPropsTransformer<any, any> | (() => Promise<ComponentPropsTransformer<any, any>>)
>;

export type PageContentPropsTransformMap = typeof pageContentPropsTransformMap;

export const pageContentPropsTransformMap = {
    NewsSection: () =>
      import('../../components/sections/news-section/NewsSection.transformer').then(
        (module) => module.newsSectionTransformer,
      ),

    ProgramSection: () =>
      import('../../components/sections/program-section/ProgramSection.transformer').then(
        (module) => module.programSectionTransformer,
      ),

    IntroSection: () =>
      import('../../components/sections/intro-section/IntroSection.transformer').then(
        (module) => module.introSectionTransformer,
      ),

    GallerySection: () =>
      import('../../components/sections/gallery-section/GallerySection.transformer').then(
        (module) => module.gallerySectionTransformer,
      ),

    AboutSection: () =>
      import('../../components/sections/about-section/AboutSection.transformer').then(
        (module) => module.aboutSectionTransformer,
      ),

    HeroSection: () => import('../../components/sections/hero-section/HeroSection.transformer').then(
        (module) => module.heroSectionTransformer,
      ),
} as const satisfies UnknownPropsTransformMap;

/* eslint-disable @typescript-eslint/naming-convention */
export const propsTransformMap = {
  ...pageContentPropsTransformMap,
} as const satisfies UnknownPropsTransformMap;
