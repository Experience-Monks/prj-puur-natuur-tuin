// Central mapping of CMS section _type to transformer functions
// Each transformer adapts raw CMS data to the props expected by the React component

import { SectionTypeName } from 'src/data/enum/SectionTypeName';
import { type FooterCms } from '../../footer/Footer.types';
import { FooterTransformer } from '../../footer/FooterTransformer';
import {
  type NavigationSectionData,
  navigationTransformer,
} from '../../navigation/navigation.transformer';
import {
  type AboutSectionCms,
  aboutSectionTransformer,
} from '../../sections/about-section/aboutSection.transformer';
import {
  type GallerySectionCms,
  gallerySectionTransformer,
} from '../../sections/gallery-section/gallerySection.transformer';
import {
  type HeroSectionCms,
  heroSectionTransformer,
} from '../../sections/hero-section/heroSection.transformer';
import {
  type IntroSectionCms,
  introSectionTransformer,
} from '../../sections/intro-section/introSection.transformer';
import {
  type NewsSectionCms,
  newsSectionTransformer,
} from '../../sections/news-section/newsSection.transformer';
import {
  type ProgramSectionCms,
  programSectionTransformer,
} from '../../sections/program-section/programSection.transformer';

// Add more transformers as needed

type ImplementedSectionType =
  | SectionTypeName.NewsSection
  | SectionTypeName.ProgramSection
  | SectionTypeName.IntroSection
  | SectionTypeName.GallerySection
  | SectionTypeName.AboutSection
  | SectionTypeName.HeroSection
  | SectionTypeName.StickyNavigation
  | SectionTypeName.Footer;

export type SectionTransformerInput = {
  [SectionTypeName.NewsSection]: NewsSectionCms;
  [SectionTypeName.ProgramSection]: ProgramSectionCms;
  [SectionTypeName.IntroSection]: IntroSectionCms;
  [SectionTypeName.GallerySection]: GallerySectionCms;
  [SectionTypeName.AboutSection]: AboutSectionCms;
  [SectionTypeName.HeroSection]: HeroSectionCms;
  [SectionTypeName.StickyNavigation]: NavigationSectionData;
  [SectionTypeName.Footer]: FooterCms;
};

export type TransformerPageData = Record<string, unknown>;

export type TransformerContext = {
  navigationSlugs?: Array<Array<string>>;
  params?: Record<string, unknown>;
  landingPageSlug?: string;
  pageData?: TransformerPageData;
};

export type SectionTransformerMap = Partial<{
  [key in ImplementedSectionType]: (
    input: SectionTransformerInput[key],
    context?: TransformerContext,
  ) => unknown;
}>;

export const sectionTransformerMap: SectionTransformerMap = {
  [SectionTypeName.NewsSection]: async (section: NewsSectionCms) => newsSectionTransformer(section),
  [SectionTypeName.ProgramSection]: async (section: ProgramSectionCms) =>
    programSectionTransformer(section),
  [SectionTypeName.IntroSection]: async (section: IntroSectionCms) =>
    introSectionTransformer(section),
  [SectionTypeName.GallerySection]: async (section: GallerySectionCms) =>
    gallerySectionTransformer(section),
  [SectionTypeName.AboutSection]: async (section: AboutSectionCms) =>
    aboutSectionTransformer(section),
  [SectionTypeName.HeroSection]: async (section: HeroSectionCms) => heroSectionTransformer(section),
  [SectionTypeName.StickyNavigation]: async (
    section: NavigationSectionData,
    context?: TransformerContext,
  ) =>
    navigationTransformer(
      section,
      context?.params,
      context?.navigationSlugs,
      context?.landingPageSlug,
    ),
  [SectionTypeName.Footer]: async (section: FooterCms) => FooterTransformer(section),
};
