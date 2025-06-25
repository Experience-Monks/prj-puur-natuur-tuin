import { DocumentDefinition } from 'sanity';

export default {
  name: 'socialLink',
  type: 'document',
  title: 'Social link',
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
      type: 'string',
      title: 'Url',
      validation: (rule) => rule.required(),
    },
    {
      name: 'icon',
      type: 'string',
      title: 'The icon to use with the social link',
      validation: (rule) => rule.required(),
      options: {
        list: ['youtube', 'facebook', 'instagram', 'linkedin', 'x'],
      },
    },
  ],
} satisfies DocumentDefinition;
