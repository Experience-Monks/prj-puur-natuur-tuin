import { defineField } from 'sanity';
import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';

export default createComponentDocument('footer', {
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    {
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'navigationLink' }, { type: 'externalLink' }],
        },
      ],
      validation: (rule) => rule.required().min(1).max(6),
    },
    defineField({
      name: 'copyrightLeft',
      title: 'Copyright Left Text',
      type: 'string',
    }),
    defineField({
      name: 'copyrightRight',
      title: 'Copyright Right Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
