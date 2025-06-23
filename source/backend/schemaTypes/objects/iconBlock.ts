import { defineType } from 'sanity';

export default defineType({
  type: 'object',
  name: 'iconBlock',
  title: 'Icon Blok',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    { name: 'altText', title: 'Alt Text', type: 'string' },
  ],
  preview: {
    select: {
      media: 'icon',
      title: 'altText',
    },
    prepare({ media, title }) {
      return {
        title: title || 'Icon Block',
        media,
      };
    },
  },
});
