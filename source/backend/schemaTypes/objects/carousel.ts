import { defineType } from 'sanity';

export default defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [{ name: 'images', title: 'Afbeeldingen', type: 'array', of: [{ type: 'image' }] }],
});
