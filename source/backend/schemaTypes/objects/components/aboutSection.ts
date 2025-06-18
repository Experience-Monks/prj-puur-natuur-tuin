import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';

export default createComponentDocument('aboutSection', {
  fields: [
    {
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      initialValue: true,
      description: 'Controls whether this section is displayed',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading for the about section',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 4,
      description: 'Main text content for the about section',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
        },
      ],
      description: 'Image for the about section',
    },
    {
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'ctaButton',
      description: 'Button to learn more or take action',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'content',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'About Section',
        subtitle: subtitle
          ? `${subtitle.substring(0, 50)}${subtitle.length > 50 ? '...' : ''}`
          : 'No content',
        media,
      };
    },
  },
});
