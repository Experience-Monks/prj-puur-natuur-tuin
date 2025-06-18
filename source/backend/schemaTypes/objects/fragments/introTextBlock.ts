import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'introTextBlock',
  title: 'Intro Text',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare({ text }) {
      return {
        title: text || 'Text',
        subtitle: 'Text Fragment',
      };
    },
  },
});
