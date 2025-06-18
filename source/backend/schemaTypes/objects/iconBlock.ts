import { defineType } from 'sanity';

export default defineType({
  type: 'object',
  name: 'iconBlock',
  title: 'Icoon Blok',
  fields: [
    {
      name: 'icon',
      title: 'Icoon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    { name: 'altText', title: 'Alt Tekst', type: 'string' },
  ],
  preview: {
    select: {
      media: 'icon',
      title: 'altText',
    },
    prepare({ media, title }) {
      return {
        title: title || 'Icoon Blok',
        media,
      };
    },
  },
});
