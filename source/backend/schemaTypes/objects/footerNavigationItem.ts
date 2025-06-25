import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footerNavigationItem',
  title: 'Footer Navigation Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'link',
      type: 'reference',
      to: [{ type: 'navigationLink' }, { type: 'externalLink' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      pageName: 'link.page.title',
      externalUrl: 'link.externalUrl',
    },
    prepare({ title, pageName, externalUrl }) {
      const subtitle = pageName
        ? `Internal: ${pageName}`
        : externalUrl
          ? `External: ${externalUrl}`
          : 'No link set';

      return {
        title,
        subtitle,
      };
    },
  },
});
