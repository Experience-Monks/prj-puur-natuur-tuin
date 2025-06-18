import { createFragment } from '../../../util/object-utils/createFragment';
import { Rule } from 'sanity';

export default createFragment('button', {
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Button Link',
      type: 'linkFragment',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'style',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Green)', value: 'primary' },
          { title: 'Secondary (White)', value: 'secondary' },
        ],
      },
      initialValue: 'primary',
    },
  ],
});
