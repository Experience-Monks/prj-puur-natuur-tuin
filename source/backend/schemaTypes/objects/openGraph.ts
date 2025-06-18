import { defineType } from 'sanity';

export default defineType({
  name: 'openGraph',
  title: 'Open Graph',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Shown in search engine results and when shared on social media',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Shown in search engine results and when shared on social media',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image shown when shared on social media',
      options: {
        hotspot: true,
      },
    },
  ],
});
