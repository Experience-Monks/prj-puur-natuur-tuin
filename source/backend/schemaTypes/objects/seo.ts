import { defineType } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { name: 'metaTitle', title: 'Meta Titel', type: 'string' },
    { name: 'metaDescription', title: 'Meta Omschrijving', type: 'string' },
    { name: 'ogImage', title: 'Open Graph Afbeelding', type: 'image' },
  ],
});
