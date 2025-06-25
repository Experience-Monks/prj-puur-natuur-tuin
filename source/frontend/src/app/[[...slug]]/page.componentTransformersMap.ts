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
    import('../../components/cms-components/news-section/NewsSection.transformer').then(
      (module) => module.newsSectionTransformer,
    ),
  ProgramSection: () =>
    import('../../components/cms-components/program-section/ProgramSection.transformer').then(
      (module) => module.programSectionTransformer,
    ),
  IntroSection: () =>
    import('../../components/cms-components/intro-section/IntroSection.transformer').then(
      (module) => module.introSectionTransformer,
    ),
  GallerySection: () =>
    import('../../components/cms-components/gallery-section/GallerySection.transformer').then(
      (module) => module.gallerySectionTransformer,
    ),
  AboutSection: () =>
    import('../../components/cms-components/about-section/AboutSection.transformer').then(
      (module) => module.aboutSectionTransformer,
    ),
  HeroSection: () =>
    import('../../components/cms-components/hero-section/HeroSection.transformer').then(
      (module) => module.heroSectionTransformer,
    ),
  Navigation: () =>
    import('../../components/cms-components/navigation/Navigation.transformer').then(
      (module) => module.navigationTransformer,
    ),
  Footer: () =>
    import('../../components/cms-components/footer/Footer.transformer').then(
      (module) => module.footerTransformer,
    ),
} as const satisfies UnknownPropsTransformMap;

/* eslint-disable @typescript-eslint/naming-convention */
export const propsTransformMap = {
  ...pageContentPropsTransformMap,
} as const satisfies UnknownPropsTransformMap;
