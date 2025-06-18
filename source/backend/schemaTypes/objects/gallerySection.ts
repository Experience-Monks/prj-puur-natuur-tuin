import { defineType } from 'sanity';

export default defineType({
  name: 'gallerySection',
  title: 'Gallerij Sectie',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Afbeeldingen',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    { name: 'enabled', title: 'Sectie tonen?', type: 'boolean', initialValue: true },
  ],
  preview: {
    select: {
      enabled: 'enabled',
    },
    prepare({ enabled }) {
      return {
        title: `Gallerij Sectie${enabled === false ? ' (uitgeschakeld)' : ''}`,
        subtitle: 'Gallerij Sectie',
      };
    },
  },
});
