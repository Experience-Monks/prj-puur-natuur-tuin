import { defineField, defineType, DocumentDefinition } from 'sanity';

export default {
  name: 'navigationLink',
  title: 'Navigation Link',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ariaLabel',
      type: 'string',
      title: 'Aria label',
    }),
    defineField({
      name: 'page',
      type: 'reference',
      title: 'Page',
      to: [{ type: 'page' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'component',
      type: 'reference',
      title: 'Component',
      to: [
        { type: 'heroSection' },
        { type: 'newsSection' },
        { type: 'programSection' },
        { type: 'introSection' },
        { type: 'gallerySection' },
        { type: 'aboutSection' },
        // Add more component types as needed
      ],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'sectionId',
    },
  },
} satisfies DocumentDefinition;
