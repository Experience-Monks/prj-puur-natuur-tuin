import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';
import { Rule } from 'sanity';

export default createComponentDocument('newsSection', {
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
          { title: 'Latest News (Automatic)', value: 'latest' },
          { title: 'Manual Selection', value: 'manual' },
        ],
        layout: 'radio',
      },
      initialValue: 'latest',
    },
    {
      name: 'maxItems',
      title: 'Maximum Number of Items',
      type: 'number',
      initialValue: 4,
      hidden: ({ parent }) => parent?.displayMode !== 'latest',
      validation: (Rule: Rule) => Rule.integer().positive().min(1).max(8),
    },
    {
      name: 'manualItems',
      title: 'Selected News Articles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'news' }],
        },
      ],
      hidden: ({ parent }) => parent?.displayMode !== 'manual',
      validation: (Rule: Rule) => Rule.max(8),
    },
    {
      name: 'showButton',
      title: 'Show Button',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to show or hide the call to action button',
    },
    {
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'buttonFragment',
      description: 'Button to view all news',
      hidden: ({ parent }) => !parent?.showButton,
    },
  ],
  preview: {
    select: {
      title: 'header.title',
      subtitle: 'header.subtitle',
    },
  },
});
