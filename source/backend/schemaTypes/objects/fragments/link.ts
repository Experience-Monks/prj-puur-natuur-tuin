import { createFragment } from '../../../util/object-utils/createFragment';
import { Rule } from 'sanity';

// Define a type for the parent object to help TypeScript understand the structure
type LinkParent = {
  linkType?: 'internal' | 'external' | 'email';
};

export default createFragment('link', {
  fields: [
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Page', value: 'internal' },
          { title: 'External URL', value: 'external' },
          { title: 'Email Address', value: 'email' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
      validation: (Rule: Rule) => Rule.required().error('Please select a link type'),
    },
    {
      name: 'internalLink',
      title: 'Internal Page',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ parent }) => parent?.linkType !== 'internal',
      validation: (Rule: Rule) =>
        Rule.custom((value, context) => {
          // Use type assertion to help TypeScript understand the structure
          const parent = context.parent as LinkParent;
          if (parent?.linkType === 'internal' && !value) {
            return 'Please select a page';
          }
          return true;
        }),
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description: 'Include the full URL with protocol (e.g., https://example.com)',
      hidden: ({ parent }) => parent?.linkType !== 'external',
      validation: (Rule: Rule) =>
        Rule.custom((value, context) => {
          // Use type assertion to help TypeScript understand the structure
          const parent = context.parent as LinkParent;
          if (parent?.linkType === 'external' && !value) {
            return 'Please enter a valid URL';
          }
          return true;
        }),
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
      description: 'Enter email address without "mailto:" prefix (e.g., contact@example.com)',
      hidden: ({ parent }) => parent?.linkType !== 'email',
      validation: (Rule: Rule) =>
        Rule.regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, {
          name: 'email',
          invert: false,
        }).error('Please enter a valid email address'),
    },
  ],
});
