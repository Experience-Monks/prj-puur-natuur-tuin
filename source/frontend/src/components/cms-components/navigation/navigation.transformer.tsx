/* eslint-disable no-underscore-dangle */
import { type NavigationProps } from './Navigation';

export type SanityImageAsset = {
  url?: string | null;
};

export type NavigationSectionData = {
  _type: string;
  title?: string;
  links?: Array<{
    label?: string;
    sectionId?: string;
  }>;
  logo?: {
    asset?: {
      url?: string | null;
    };
  };
};

/**
 * Transforms the navigation data from Sanity CMS to the format expected by the Navigation component
 */
export const navigationTransformer = (
  navigationData?: NavigationSectionData,
  sections?: Array<Record<string, unknown>>,
  pageComponents?: Array<Record<string, unknown>>,
  parameters?: { slug?: Array<string> },
  navigationSlugs?: Array<Array<string>>,
  landingPageSlug?: string,
): NavigationProps => {
  // If we have explicit navigation data from CMS, use that
  if (navigationData?.links && navigationData.links.length > 0) {
    const links = navigationData.links
      .filter((link) => link.label && link.sectionId)
      .map((link) => ({
        label: link.label ?? '',
        href: `#${link.sectionId}`,
      }));
    return { links };
  }

  // Determine if we're on the homepage
  const currentSlug = parameters?.slug?.length ? parameters.slug.at(-1) : '';
  const isHomePage = !currentSlug || currentSlug === landingPageSlug;

  // Map of section _type → nav label and id
  const sectionMap: Record<string, { label: string; id: string }> = {
    introSection: { label: 'Intro', id: 'intro-section' },
    newsSection: { label: 'Nieuws', id: 'news-section' },
    programSection: { label: 'Het Programma', id: 'program-section' },
    gallerySection: { label: 'Gallerij', id: 'gallery-section' },
    aboutSection: { label: 'Over Ons', id: 'about-section' },
    heroSection: { label: 'Hero', id: 'hero-section' },
    textSection: { label: 'Tekst', id: 'text-section' },
    contactSection: { label: 'Contact', id: 'contact-section' },
    // Navigation components are excluded as we don't want the navigation to link to itself
    // Add more as needed...
  };

  // Optionally handle pascalCase variants (auto-normalize)
  const normalizedSectionMap: Record<string, { label: string; id: string }> = {};

  for (const key of Object.keys(sectionMap)) {
    normalizedSectionMap[key.toLowerCase()] = sectionMap[key];
  }

  const links: Array<{ label: string; href: string }> = [];

  // Add "Home" link if not on homepage
  if (!isHomePage) {
    links.push({ label: 'Home', href: '/' });
  }

  // Track added to avoid duplicates
  const addedSections = new Set<string>();

  for (const component of pageComponents ?? []) {
    const type = (
      (component._type ?? component.type ?? component.__typename ?? '') as string
    ).toLowerCase();
    // Skip navigation components - we don't want the navigation to link to itself
    if (type === 'stickynavigation' || type === 'navigation') {
      continue;
    }

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (type && normalizedSectionMap[type] && !addedSections.has(type)) {
      links.push({
        label: normalizedSectionMap[type].label,
        href: `#${normalizedSectionMap[type].id}`,
      });
      addedSections.add(type);
    }
  }

  // Fallback: default links if nothing detected
  if (links.length === (isHomePage ? 0 : 1)) {
    links.push(
      { label: 'Nieuws', href: '#news-section' },
      { label: 'Het Programma', href: '#program-section' },
      { label: 'Over Ons', href: '#about-section' },
    );
  }

  // Optionally: add isActive flag (if you want per-link active state)
  return { links };
};
