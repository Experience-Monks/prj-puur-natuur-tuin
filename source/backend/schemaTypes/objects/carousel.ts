import { defineType } from 'sanity';

export default defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    { name: 'images', title: 'Afbeeldingen', type: 'array', of: [{ type: 'image' }] },
    {
      name: 'rotation',
      title: 'Rotatie',
      type: 'string',
      options: {
        list: [
          { title: 'Geen', value: 'none' },
          { title: 'Met de klok mee', value: 'clockwise' },
          { title: 'Tegen de klok in', value: 'counterClockwise' },
        ],
        layout: 'radio',
      },
      initialValue: 'none',
    },
  ],
});
