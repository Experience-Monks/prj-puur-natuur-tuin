import { defineType } from 'sanity';

export default defineType({
  type: 'object',
  name: 'textBlock',
  title: 'Text Block',
  fields: [
    {
      name: 'text',
      title: 'Text Content',
      type: 'text',
      rows: 4,
    },
    {
      name: 'richText',
      title: 'Use Rich Text',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'variant',
      title: 'Style Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Large', value: 'large' },
          { title: 'Highlight', value: 'highlight' },
        ],
      },
      initialValue: 'default',
    },
    {
      name: 'align',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'left',
    },
    {
      name: 'maxWidth',
      title: 'Maximum Width (px)',
      type: 'number',
      description: 'Optional maximum width in pixels (leave empty for full width)',
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'variant',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Text Block',
        subtitle: subtitle ? `Style: ${subtitle}` : 'Default style',
        media: () => '📝',
      };
    },
  },
});
