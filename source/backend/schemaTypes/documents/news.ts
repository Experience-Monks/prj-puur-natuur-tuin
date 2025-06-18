import { defineType } from 'sanity';

export default defineType({
  name: 'news',
  title: 'Nieuws',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string' },
    { name: 'date', title: 'Datum', type: 'date' },
    { name: 'icon', title: 'Icoon', type: 'image' },
  ],
});
