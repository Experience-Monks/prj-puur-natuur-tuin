import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'stickyNavigation',
  title: 'Sticky Navigation',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Navigation title (for internal reference only)',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Logo to display in the navigation',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'navigationLink' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Sticky Navigation',
      };
    },
  },
});
