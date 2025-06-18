import { defineType } from 'sanity';

export default defineType({
  name: 'program',
  title: 'Programma',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string' },
    { name: 'description', title: 'Beschrijving', type: 'text' },
    { name: 'datetime', title: 'Datum en tijd', type: 'datetime' },
    { name: 'image', title: 'Afbeelding', type: 'image' },
    // Optional: keep icon and featured if you use them elsewhere
    { name: 'icon', title: 'Icoon', type: 'image' },
    { name: 'featured', title: 'Uitgelicht', type: 'boolean' },
  ],
});
