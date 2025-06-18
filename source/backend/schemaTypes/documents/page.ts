import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'landing',
      title: 'Is Landing Page',
      description: 'Set to true if this is the homepage/landing page',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'parent',
      title: 'Parent Page',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'Select a parent page to create a hierarchical structure',
    }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph',
      type: 'openGraph',
    }),
    defineField({
      name: 'headerVariant',
      title: 'Header Variant',
      type: 'string',
      description: 'Optional variant for the header',
    }),
    defineField({
      name: 'overwrittenMainNavigation',
      title: 'Custom Navigation',
      type: 'reference',
      to: [{ type: 'navigation' }],
      description: 'Optional custom navigation for this page',
    }),
    defineField({
      name: 'overwrittenFooter',
      title: 'Custom Footer',
      type: 'reference',
      to: [{ type: 'footer' }],
      description: 'Optional custom footer for this page',
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      description: 'Add, remove, or reorder sections by dragging',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'newsSection' },
        { type: 'programSection' },
        { type: 'introSection' },
        { type: 'gallerySection' },
        { type: 'aboutSection' },
        { type: 'stickyNavigation' },
        // Add more component types as needed
      ],
      options: {
        sortable: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      landing: 'landing',
    },
    prepare({ title, slug, landing }) {
      return {
        title,
        subtitle: landing ? '/ (Landing Page)' : `/${slug}`,
      };
    },
  },
});
