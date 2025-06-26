import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';
import { defineField } from 'sanity';
import { getComponentSpacingObject } from '../../../util/object-utils/createComponentSpacingObject';

export default createComponentDocument(
  'gallerySection',
  {
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        description:
          'A descriptive title to identify this gallery section in the CMS (not displayed on the website)',
      }),
      defineField({
        name: 'carousel',
        title: 'Carousel',
        type: 'carousel',
      }),
      getComponentSpacingObject('marginBottom', {
        fieldset: 'spacing',
        description: 'Space below the component',
      }),
    ],

    fieldsets: [
      {
        name: 'spacing',
        title: 'Spacing',
        description: 'Configure the spacing for this component',
        options: { collapsible: true, collapsed: true },
      },
    ],

    preview: {
      select: {
        title: 'title',
        media: 'carousel.images.0',
      },
      prepare({ title, media }) {
        return {
          title: `${title || 'Gallery Section'}`,
          media,
        };
      },
    },
  },
  { includeComponentSpacing: false },
);
