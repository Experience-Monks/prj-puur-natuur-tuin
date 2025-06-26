import type { StructureResolver } from 'sanity/structure';
import {
  ArrowRightIcon,
  ArrowTopRightIcon,
  CogIcon,
  ComponentIcon,
  EarthGlobeIcon,
  LinkIcon,
  ProjectsIcon,
} from '@sanity/icons';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page').title('Pages'),

      S.listItem()
        .title('Content Items')
        .icon(ProjectsIcon)
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
        .icon(ComponentIcon)
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
              S.documentTypeListItem('heroSection').title('Hero Section'),
            ]),
        ),

      S.listItem()
        .title('Links')
        .icon(LinkIcon)
        .child(
          S.list()
            .title('Links')
            .items([
              S.documentTypeListItem('navigationLink').icon(ArrowRightIcon),
              S.documentTypeListItem('externalLink').icon(ArrowTopRightIcon),
              S.documentTypeListItem('socialLink').icon(EarthGlobeIcon),
            ]),
        ),

      S.divider(),

      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ]);
