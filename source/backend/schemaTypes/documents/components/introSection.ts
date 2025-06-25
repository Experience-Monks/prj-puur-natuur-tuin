import { createComponentDocument } from '../../../util/document-utils/createComponentDocument';

export default createComponentDocument('introSection', {
  fields: [
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
      validation: (rule) => rule.required().min(5).max(30),
    },
    {
      name: 'content',
      title: 'Main Content',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'link',
      type: 'reference',
      to: [{ type: 'navigationLink' }, { type: 'externalLink' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      enabled: 'enabled',
      blocks: 'blocks',
    },
    prepare({ title, blocks }) {
      const blockCount = blocks?.length || 0;

      return {
        title: `${title || 'Intro Section'}`,
        subtitle: blockCount > 0 ? `${blockCount} content blocks` : 'Intro Section',
      };
    },
  },
});
