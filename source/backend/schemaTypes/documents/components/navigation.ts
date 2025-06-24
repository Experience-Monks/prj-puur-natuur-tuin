import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';

export default createComponentDocument('navigation', {
  fields: [
    { name: 'title', title: 'Titel', type: 'string' },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Logo to display in the navigation',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'navigationLink' }],
    },
    { name: 'url', title: 'URL', type: 'url' },
  ],
});
