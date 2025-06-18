import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'introIconBlock',
  title: 'Intro Icon',
  type: 'object',
  fields: [
    defineField({
      name: 'iconType',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          { title: 'Sun', value: 'sun' },
          { title: 'Leaf', value: 'leaf' },
          { title: 'Big Leaf', value: 'bigLeaf' },
          { title: 'Bee', value: 'bee' },
          { title: 'Carrot', value: 'carrot' },
          { title: 'Flower', value: 'flower' },
          { title: 'Person Reading', value: 'personReading' },
          { title: 'Person Planting', value: 'personPlant' },
          { title: 'Person Eating', value: 'personEating' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      iconType: 'iconType',
    },
    prepare({ iconType }) {
      const iconNames = {
        sun: 'Sun',
        leaf: 'Leaf',
        bigLeaf: 'Big Leaf',
        bee: 'Bee',
        carrot: 'Carrot',
        flower: 'Flower',
        personReading: 'Person Reading',
        personPlant: 'Person Planting',
        personEating: 'Person Eating',
      };

      return {
        title: `Icon: ${iconNames[iconType as keyof typeof iconNames] || iconType}`,
        media: () => '🖼️',
      };
    },
  },
});
