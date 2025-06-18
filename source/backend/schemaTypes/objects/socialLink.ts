import { defineType } from 'sanity';

export default defineType({
  name: 'socialLink',
  title: 'Sociale Link',
  type: 'object',
  fields: [
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'url', title: 'URL', type: 'url' },
  ],
});
