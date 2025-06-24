import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
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
        .title('Components')
        .child(
          S.list()
            .title('Components')
            .items([
              S.documentTypeListItem('navigation').title('Navigation'),
              S.documentTypeListItem('footer').title('Footer'),
              S.documentTypeListItem('newsSection').title('News section'),
              S.documentTypeListItem('gallerySection').title('Gallery Section'),
              S.documentTypeListItem('introSection').title('Intro Section'),
              S.documentTypeListItem('programSection').title('Program Section'),
              S.documentTypeListItem('aboutSection').title('About Section'),
            ]),
        ),

      S.divider(),

      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ]);
