import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';

export default createComponentDocument('heroSection', {
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
      description: 'Main heading for the hero section',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Secondary heading for the hero section',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
        },
      ],
      description: 'Background image for the hero section',
    },
    {
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        { type: 'textBlock' },
        // Add more block types here as needed
      ],
      description: 'Add and arrange content blocks for the hero section',
    },
    {
      name: 'link',
      type: 'reference',
      to: [{ type: 'navigationLink' }, { type: 'externalLink' }],
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Centered', value: 'centered' },
          { title: 'Large', value: 'large' },
        ],
      },
      initialValue: 'default',
      description: 'Select the layout style for this hero section',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'backgroundImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Hero Section',
        subtitle: subtitle || 'No subtitle',
        media,
      };
    },
  },
});
