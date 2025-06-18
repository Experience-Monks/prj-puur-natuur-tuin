import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';
import { Rule } from 'sanity';

export default createComponentDocument('programSection', {
  fields: [
    {
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      initialValue: true,
      description: 'Controls whether this section is displayed',
    },
    {
      name: 'header',
      title: 'Section Header',
      type: 'sectionHeader',
      description: 'Title and subtitle for this section',
    },
    {
      name: 'displayMode',
      title: 'Display Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming Events (Automatic)', value: 'upcoming' },
          { title: 'Manual Selection', value: 'manual' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
    },
    {
      name: 'maxItems',
      title: 'Maximum Number of Items',
      type: 'number',
      initialValue: 5,
      hidden: ({ parent }) => parent?.displayMode !== 'upcoming',
      validation: (Rule: Rule) => Rule.integer().positive().min(1).max(10),
    },
    {
      name: 'manualItems',
      title: 'Selected Programs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'program' }],
        },
      ],
      hidden: ({ parent }) => parent?.displayMode !== 'manual',
      validation: (Rule: Rule) => Rule.max(10),
    },
    {
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'buttonFragment',
      description: 'Button to view all programs',
    },
  ],
  preview: {
    select: {
      title: 'header.title',
      subtitle: 'header.subtitle',
    },
  },
});
