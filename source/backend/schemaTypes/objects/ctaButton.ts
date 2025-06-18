import { defineType } from 'sanity';

export default defineType({
  name: 'ctaButton',
  title: 'Call to Action Button',
  type: 'object',
  fields: [
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'url', title: 'URL', type: 'string' },
  ],
});
