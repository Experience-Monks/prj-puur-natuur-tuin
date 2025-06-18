import { defineType } from 'sanity';

export default defineType({
  name: 'newsSection',
  title: 'Nieuws Sectie',
  type: 'object',
  fields: [
    { name: 'title', title: 'Sectie Titel', type: 'string', initialValue: 'Nieuws' },
    { name: 'enabled', title: 'Sectie tonen?', type: 'boolean', initialValue: true },
    {
      name: 'selectionType',
      title: 'Selectie Type',
      type: 'string',
      options: {
        list: [
          { title: 'Automatisch (laatste items)', value: 'automatic' },
          { title: 'Handmatig selecteren', value: 'manual' },
        ],
      },
      initialValue: 'automatic',
    },
    {
      name: 'maxItems',
      title: 'Maximum aantal items',
      type: 'number',
      description: 'Maximum aantal nieuws items om weer te geven',
      initialValue: 3,
      validation: (Rule) => Rule.min(1).max(10),
      hidden: ({ document }) => document?.selectionType === 'manual',
    },
    {
      name: 'newsItems',
      title: 'Nieuws Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'news' }] }],
      description: 'Selecteer nieuws items om weer te geven in deze sectie',
      hidden: ({ document }) => document?.selectionType === 'automatic',
    },
  ],
  preview: {
    select: {
      title: 'title',
      enabled: 'enabled',
    },
    prepare({ title, enabled }) {
      return {
        title: `${title || 'Nieuws Sectie'}${enabled === false ? ' (uitgeschakeld)' : ''}`,
        subtitle: 'Nieuws Sectie',
      };
    },
  },
});
