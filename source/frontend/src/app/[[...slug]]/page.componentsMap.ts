/* eslint-disable @typescript-eslint/naming-convention */
import dynamic from 'next/dynamic';

export const componentMap = {
  NewsSection: dynamic(() =>
    import('../../components/cms-components/news-section/NewsSection').then(
      (module) => module.NewsSection,
    ),
  ),
  ProgramSection: dynamic(() =>
    import('../../components/cms-components/program-section/ProgramSection').then(
      (module) => module.ProgramSection,
    ),
  ),
  IntroSection: dynamic(() =>
    import('../../components/cms-components/intro-section/IntroSection').then(
      (module) => module.IntroSection,
    ),
  ),
  GallerySection: dynamic(() =>
    import('../../components/cms-components/gallery-section/GallerySection').then(
      (module) => module.GallerySection,
    ),
  ),
  AboutSection: dynamic(() =>
    import('../../components/cms-components/about-section/AboutSection').then(
      (module) => module.AboutSection,
    ),
  ),
  HeroSection: dynamic(() =>
    import('../../components/cms-components/hero-section/HeroSection').then(
      (module) => module.HeroSection,
    ),
  ),
  Footer: dynamic(() =>
    import('../../components/cms-components/footer/Footer').then((module) => module.Footer),
  ),
  // StickyNavigation: dynamic(() =>
  //   import('../../components/cms-components/intro-section/StickyNavigation').then(
  //     (module) => module.StickyNavigation,
  //   ),
  // ),
} as const;

export type ComponentMap = typeof componentMap;
