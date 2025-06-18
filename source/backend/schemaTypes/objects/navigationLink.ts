import { defineField, defineType } from 'sanity';

// Common section types in the project
const SECTION_TYPES = [
  { title: 'Intro Section - PuurNatuurTuin', value: 'introsection-puurnatuurtuin' },
  { title: 'News Section - Nieuws', value: 'newssection-nieuws' },
  { title: 'Program Section - Het Programma', value: 'programsection-het-programma' },
  { title: 'About Section - Over Ons', value: 'aboutsection-over-ons' },
];

export default defineType({
  name: 'navigationLink',
  title: 'Navigation Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description: 'Select the section to scroll to',
      options: {
        list: SECTION_TYPES,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'sectionId',
    },
  },
});
