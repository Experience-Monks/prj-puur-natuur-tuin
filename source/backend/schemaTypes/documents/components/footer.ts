import { defineField } from 'sanity';
import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';

export default createComponentDocument('footer', {
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'navigationItems',
      title: 'Navigation Items',
      type: 'array',
      of: [{ type: 'footerNavigationItem' }],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
