import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pageLink',
  title: 'Page Link',
  type: 'object',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'Link to an internal page',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description: 'Link to an external website',
    }),
  ],
  validation: (Rule) =>
    Rule.custom((link) => {
      if (!link?.page && !link?.externalUrl) {
        return 'You must provide either a page reference or an external URL';
      }
      if (link?.page && link?.externalUrl) {
        return 'You cannot provide both a page reference and an external URL';
      }
      return true;
    }),
  preview: {
    select: {
      pageName: 'page.title',
      externalUrl: 'externalUrl',
    },
    prepare({ pageName, externalUrl }) {
      const title = pageName
        ? `Page: ${pageName}`
        : externalUrl
          ? `URL: ${externalUrl}`
          : 'No link set';

      return {
        title,
      };
    },
  },
});
