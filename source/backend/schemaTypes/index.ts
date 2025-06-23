// About section is now handled by the component schema
import news from './documents/news';
import program from './documents/program';
import homepage from './documents/homepage';
import siteSettings from './documents/siteSettings';
import navigation from './documents/navigation';
import gallery from './documents/gallery';
import page from './documents/page';
import footer from './documents/footer';

// Objects
import carousel from './objects/carousel';
import socialLink from './objects/socialLink';
import blockContent from './objects/blockContent';
import seo from './objects/seo';
// Component-based imports
import introSection from './objects/components/introSection';
import introTextBlock from './objects/fragments/introTextBlock';
import introIconBlock from './objects/fragments/introIconBlock';
import programSection from './objects/components/programSection';
import gallerySection from './objects/gallerySection';
import openGraph from './objects/openGraph';
import footerNavigationItem from './objects/footerNavigationItem';
import pageLink from './objects/pageLink';
import stickyNavigation from './objects/navigation';
import navigationLink from './objects/navigationLink';
import textBlock from './objects/textBlock';
import iconBlock from './objects/iconBlock';

// New Components
import aboutSection from './objects/components/aboutSection';

// Fragments
import buttonFragment from './objects/fragments/button';
import linkFragment from './objects/fragments/link';
import sectionHeader from './objects/fragments/sectionHeader';
import heroSection from './objects/components/heroSection';
import newsSection from './objects/components/newsSection';

export const schemaTypes = [
  // Documents
  // about document removed - now using aboutSection component
  news,
  program,
  homepage,
  siteSettings,
  navigation,
  gallery,
  page,
  footer,

  // Objects
  carousel,
  socialLink,
  blockContent,
  seo,
  newsSection,
  programSection,
  introSection,
  introTextBlock,
  introIconBlock,
  gallerySection,
  aboutSection,
  openGraph,
  footerNavigationItem,
  pageLink,
  stickyNavigation,
  navigationLink,
  textBlock,
  iconBlock,

  // Component-based schemas
  heroSection,

  // Fragments
  buttonFragment,
  linkFragment,
  sectionHeader,
];
