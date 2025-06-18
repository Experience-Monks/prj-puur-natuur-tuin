import { Rule } from 'sanity';

export default {
  name: 'sectionHeader',
  title: 'Section Header',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
};
