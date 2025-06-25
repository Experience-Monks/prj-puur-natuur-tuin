// About section is now handled by the component schema
import news from './documents/news';
import program from './documents/program';
import homepage from './documents/homepage';
import siteSettings from './documents/siteSettings';
import page from './documents/page';

// CMS Components
import heroSection from './documents/components/heroSection';
import footer from './documents/components/footer';
import newsSection from './documents/components/newsSection';
import navigation from './documents/components/navigation';
import gallerySection from './documents/components/gallerySection';
import introSection from './documents/components/introSection';
import programSection from './documents/components/programSection';
import aboutSection from './documents/components/aboutSection';

// Objects
import carousel from './objects/carousel';
import blockContent from './objects/blockContent';
import seo from './objects/seo';

// Component-based imports
import openGraph from './objects/openGraph';
import footerNavigationItem from './objects/footerNavigationItem';
import textBlock from './objects/textBlock';
import iconBlock from './objects/iconBlock';

// Links
import navigationLink from './objects/link/navigationLink';
import externalLink from './objects/link/externalLink';
import socialLink from './objects/link/socialLink';

// Fragments
import sectionHeader from './objects/fragments/sectionHeader';
import introTextBlock from './objects/fragments/introTextBlock';
import introIconBlock from './objects/fragments/introIconBlock';

export const schemaTypes = [
  // Documents
  news,
  program,
  homepage,
  siteSettings,
  navigation,
  gallerySection,
  aboutSection,
  page,
  footer,
  newsSection,
  programSection,
  introSection,
  heroSection,

  // Objects
  carousel,
  blockContent,
  seo,

  openGraph,
  footerNavigationItem,
  textBlock,
  iconBlock,

  // Links
  externalLink,
  socialLink,
  navigationLink,

  // Fragments
  sectionHeader,
  introTextBlock,
  introIconBlock,
];
