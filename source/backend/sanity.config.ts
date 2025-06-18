import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['siteSettings', 'footer', 'navigation']);

export default defineConfig({
  name: 'puur-natuur-tuin',
  title: 'Puur Natuur Tuin',
  projectId: 'r3hap4jk',
  dataset: 'dataset',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('page').title('Pages'),

            S.listItem()
              .title('Content Items')
              .child(
                S.list()
                  .title('Content Items')
                  .items([
                    S.documentTypeListItem('news').title('News Items'),
                    S.documentTypeListItem('program').title('Program Items'),
                  ]),
              ),

            S.listItem()
              .title('Global Components')
              .child(
                S.list()
                  .title('Global Components')
                  .items([
                    S.documentTypeListItem('navigation').title('Navigation'),
                    S.documentTypeListItem('footer').title('Footer'),
                  ]),
              ),

            S.divider(),

            S.listItem()
              .title('Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global "New document" menu options
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
