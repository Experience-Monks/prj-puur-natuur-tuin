import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  // This is a singleton document - there should only be one homepage
  // Note: We'll handle this through the desk structure instead of experimental actions
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Homepage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the homepage (used for SEO)',
    }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph / SEO',
      type: 'openGraph',
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
        { type: 'aboutSection' },
        { type: 'introSection' },
        { type: 'gallerySection' },
      ],
      options: {
        sortable: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      };
    },
  },
});
