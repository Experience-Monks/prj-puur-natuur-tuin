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
    defineField({
      name: 'link',
      title: 'Link',
      type: 'pageLink',
    }),
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
