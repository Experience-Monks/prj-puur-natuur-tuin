import { defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Galerij',
  type: 'document',
  fields: [{ name: 'images', title: 'Afbeeldingen', type: 'array', of: [{ type: 'image' }] }],
});
