/* eslint-disable @typescript-eslint/naming-convention */
import dynamic from 'next/dynamic';

export const componentMap = {
  NewsSection: dynamic(() =>
    import('../../components/sections/news-section/NewsSection').then(
      (module) => module.NewsSection,
    ),
  ),
  ProgramSection: dynamic(() =>
    import('../../components/sections/program-section/ProgramSection').then(
      (module) => module.ProgramSection,
    ),
  ),
  IntroSection: dynamic(() =>
    import('../../components/sections/intro-section/IntroSection').then(
      (module) => module.IntroSection,
    ),
  ),
  GallerySection: dynamic(() =>
    import('../../components/sections/gallery-section/GallerySection').then(
      (module) => module.GallerySection,
    ),
  ),
  AboutSection: dynamic(() =>
    import('../../components/sections/about-section/AboutSection').then(
      (module) => module.AboutSection,
    ),
  ),
  HeroSection: dynamic(() =>
    import('../../components/sections/hero-section/HeroSection').then(
      (module) => module.HeroSection,
    ),
  ),
  // StickyNavigation: dynamic(() =>
  //   import('../../components/sections/intro-section/StickyNavigation').then(
  //     (module) => module.StickyNavigation,
  //   ),
  // ),
} as const;

export type ComponentMap = typeof componentMap;
