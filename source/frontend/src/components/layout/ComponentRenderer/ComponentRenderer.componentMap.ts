// Central mapping of CMS section _type to React component
import { SectionTypeName } from 'src/data/enum/SectionTypeName';
import { Footer } from '../../footer/Footer';
import { Navigation } from '../../navigation/Navigation';
import { AboutSection } from '../../sections/about-section/AboutSection';
import { GallerySection } from '../../sections/gallery-section/GallerySection';
import { HeroSection } from '../../sections/hero-section/HeroSection';
import { IntroSection } from '../../sections/intro-section/IntroSection';
import { NewsSection } from '../../sections/news-section/NewsSection';
import { ProgramSection } from '../../sections/program-section/ProgramSection';

export const sectionComponentMap = {
  [SectionTypeName.HeroSection]: HeroSection,
  [SectionTypeName.NewsSection]: NewsSection,
  [SectionTypeName.ProgramSection]: ProgramSection,
  [SectionTypeName.IntroSection]: IntroSection,
  [SectionTypeName.GallerySection]: GallerySection,
  [SectionTypeName.AboutSection]: AboutSection,
  [SectionTypeName.StickyNavigation]: Navigation,
  [SectionTypeName.Footer]: Footer,
  // Add more as needed
};

export type SectionComponentIdentifier = keyof typeof sectionComponentMap;
