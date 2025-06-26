import { defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteTitle', title: 'Site Titel', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image' },
    { name: 'contactEmail', title: 'Contact E-mail', type: 'string' },
    {
      name: 'socialLinks',
      title: 'Sociale Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    },
    // SEO and Open Graph fields
    { name: 'openGraphTitle', title: 'Default SEO Title', type: 'string' },
    { name: 'openGraphDescription', title: 'Default SEO Description', type: 'text' },
    {
      name: 'openGraphImage',
      title: 'Default SEO Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'fallbackImage',
      title: 'Fallback Image',
      description: 'Used when no image is provided for a component',
      type: 'image',
      options: { hotspot: true },
    },
    // Navigation and Footer references
    {
      name: 'mainNavigation',
      title: 'Main Navigation',
      type: 'reference',
      to: [{ type: 'navigation' }],
    },
    {
      name: 'mainFooter',
      title: 'Main Footer',
      type: 'reference',
      to: [{ type: 'footer' }],
    },
    // UI Labels
    { name: 'nextPage', title: 'Next Page Label', type: 'string', initialValue: 'Next' },
    {
      name: 'previousPage',
      title: 'Previous Page Label',
      type: 'string',
      initialValue: 'Previous',
    },
  ],
});
