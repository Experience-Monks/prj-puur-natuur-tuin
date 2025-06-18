import { createFragment } from '../../../util/object-utils/createFragment';
import { Rule } from 'sanity';

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
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'internalLink',
      title: 'Internal Page',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'news' }, { type: 'program' }],
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external',
    },
  ],
});
