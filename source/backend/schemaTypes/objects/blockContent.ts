import { defineType } from 'sanity';

export default defineType({
  name: 'blockContent',
  title: 'Blok Inhoud',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'image', fields: [{ name: 'alt', title: 'Alternatieve tekst', type: 'string' }] },
  ],
});
