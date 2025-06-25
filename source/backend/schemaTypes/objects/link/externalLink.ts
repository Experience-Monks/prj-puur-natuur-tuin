import { DocumentDefinition } from '@sanity/types';

export default {
  name: 'externalLink',
  type: 'document',
  title: 'External link',
  initialValue: {
    target: '_self',
  },
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (rule) => rule.required(),
    },
    {
      name: 'ariaLabel',
      type: 'string',
      title: 'Aria label',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Url',
      validation: (rule) => rule.required(),
    },
    {
      name: 'target',
      title: 'Target',
      description: 'Whether or not to open the link in a new window',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {
            title: 'Same window',
            value: '_self',
          },
          {
            title: 'New window',
            value: '_blank',
          },
        ],
        layout: 'radio',
      },
    },
  ],
} satisfies DocumentDefinition;
