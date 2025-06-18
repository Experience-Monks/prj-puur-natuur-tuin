import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';

export default createComponentDocument('introSection', {
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
      title: 'Section Title',
      type: 'string',
      initialValue: 'Intro',
    },
    {
      name: 'blocks',
      title: 'Content Blocks',
      description: 'Add text and icons in the desired order',
      type: 'array',
      of: [{ type: 'introTextBlock' }, { type: 'introIconBlock' }],
    },
    {
      name: 'content',
      title: 'Main Content',
      type: 'text',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'ctaButton',
      description: 'Button for the intro section',
    },
  ],
  preview: {
    select: {
      title: 'title',
      enabled: 'enabled',
      blocks: 'blocks',
    },
    prepare({ title, enabled, blocks }) {
      const blockCount = blocks?.length || 0;

      return {
        title: `${title || 'Intro Section'}${enabled === false ? ' (disabled)' : ''}`,
        subtitle: blockCount > 0 ? `${blockCount} content blocks` : 'Intro Section',
      };
    },
  },
});
