import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';
import { defineField } from 'sanity';

export default createComponentDocument('gallerySection', {
  fields: [
    defineField({
      name: 'images',
      title: 'Afbeeldingen',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
});
