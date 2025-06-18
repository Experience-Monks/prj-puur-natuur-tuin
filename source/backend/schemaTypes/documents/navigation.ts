import { defineType } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigatie',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'order', title: 'Volgorde', type: 'number' },
    { name: 'showInHeader', title: 'Toon in Header', type: 'boolean' },
    { name: 'showInFooter', title: 'Toon in Footer', type: 'boolean' },
    { name: 'url', title: 'URL', type: 'url' },
  ],
});
