/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  fragment PageContent on Document {\n    id: _id\n    __typename\n  }\n': typeof types.PageContentFragmentDoc;
  '\n  query getAllPages {\n    pages: allPage {\n      _id\n      slug {\n        current\n      }\n      landing\n      parent {\n        slug {\n          current\n        }\n      }\n    }\n  }\n': typeof types.GetAllPagesDocument;
  '\n  query GetSettingsQuery {\n    settings: allSiteSettings(limit: 1) {\n      openGraphTitle\n      openGraphDescription\n      openGraphImage {\n        asset {\n          url\n        }\n      }\n      fallbackImage {\n        asset {\n          url\n        }\n      }\n      mainNavigation {\n        id: _id\n        _type\n      }\n      mainFooter {\n        id: _id\n        _type\n      }\n      nextPage\n      previousPage\n    }\n  }\n': typeof types.GetSettingsQueryDocument;
  '\n  fragment PageData on Page {\n    id: _id\n    __typename\n    slug {\n      current\n    }\n    title\n    openGraph {\n      title\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n    headerVariant\n    content {\n      ...PageContent\n    }\n    overwrittenMainNavigation {\n      id: _id\n      _type\n    }\n    overwrittenFooter {\n      id: _id\n      _type\n    }\n  }\n': typeof types.PageDataFragmentDoc;
  '\n  query GetPageBySlug($slug: String!) {\n    pages: allPage(where: { slug: { current: { eq: $slug } } }) {\n      ...PageData\n    }\n  }\n': typeof types.GetPageBySlugDocument;
  '\n  query GetLandingPage {\n    pages: allPage(where: { landing: { eq: true } }) {\n      ...PageData\n    }\n  }\n': typeof types.GetLandingPageDocument;
  '\n  fragment AboutSectionIdentifier on AboutSection {\n    __typename\n    id: _id\n  }\n': typeof types.AboutSectionIdentifierFragmentDoc;
  '\n  query AboutSectionData($id: ID!) {\n    data: AboutSection(id: $id) {\n      _type\n      _key\n      title\n      content\n      image {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n': typeof types.AboutSectionDataDocument;
  '\n  fragment FooterIdentifier on Footer {\n    __typename\n    id: _id\n    _type\n  }\n': typeof types.FooterIdentifierFragmentDoc;
  '\n  query FooterData($id: ID!) {\n    data: Footer(id: $id) {\n      _id\n      _type\n      title\n      navigationItems {\n        _key\n        title\n        link {\n          ...ExternalLink\n          ...NavigationLink\n        }\n      }\n      copyright\n      socialLinks {\n        _key\n        label\n        url\n      }\n    }\n  }\n': typeof types.FooterDataDocument;
  '\n  fragment GallerySectionIdentifier on GallerySection {\n    __typename\n    id: _key\n  }\n': typeof types.GallerySectionIdentifierFragmentDoc;
  '\n  query GallerySectionData($id: ID!) {\n    data: GallerySection(id: $id) {\n      _type\n      _key\n      images {\n        asset {\n          url\n        }\n      }\n    }\n  }\n': typeof types.GallerySectionDataDocument;
  '\n  fragment HeroSectionIdentifier on HeroSection {\n    __typename\n    id: _id\n  }\n': typeof types.HeroSectionIdentifierFragmentDoc;
  '\n  query HeroSectionData($id: ID!) {\n    data: HeroSection(id: $id) {\n      _type\n      _key\n      title\n      subtitle\n      enabled\n      backgroundImage {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n      contentBlocks {\n        _key\n        _type\n        text\n        richText\n        variant\n        align\n        maxWidth\n      }\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n      variant\n    }\n  }\n': typeof types.HeroSectionDataDocument;
  '\n  fragment IntroSectionIdentifier on IntroSection {\n    __typename\n    id: _id\n  }\n': typeof types.IntroSectionIdentifierFragmentDoc;
  '\n  query IntroSectionData($id: ID!) {\n    data: IntroSection(id: $id) {\n      _type\n      _key\n      title\n      blocks {\n        ... on IntroTextBlock {\n          _key\n          _type\n          text\n        }\n        ... on IntroIconBlock {\n          _key\n          _type\n          iconType\n        }\n      }\n      content\n      subtitle\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n': typeof types.IntroSectionDataDocument;
  '\n  fragment NavigationIdentifier on Navigation {\n    __typename\n    id: _id\n    _type\n  }\n': typeof types.NavigationIdentifierFragmentDoc;
  '\n  query NavigationData($id: ID!) {\n    data: Navigation(id: $id) {\n      _type\n      _key\n      title\n      logo {\n        asset {\n          url\n        }\n      }\n      links {\n        ...NavigationLink\n      }\n    }\n  }\n': typeof types.NavigationDataDocument;
  '\n  fragment NewsSectionIdentifier on NewsSection {\n    __typename\n    id: _id\n  }\n': typeof types.NewsSectionIdentifierFragmentDoc;
  '\n  query NewsSectionData($id: ID!) {\n    data: NewsSection(id: $id) {\n      _type\n      _key\n      header {\n        title\n      }\n      enabled\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n': typeof types.NewsSectionDataDocument;
  '\n  fragment ProgramSectionIdentifier on ProgramSection {\n    __typename\n    id: _id\n  }\n': typeof types.ProgramSectionIdentifierFragmentDoc;
  '\n  query ProgramSectionData($id: ID!) {\n    data: ProgramSection(id: $id) {\n      _type\n      _key\n      header {\n        title\n      }\n      maxItems\n      enabled\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n': typeof types.ProgramSectionDataDocument;
  '\n  fragment ExternalLink on ExternalLink {\n    __typename\n    label\n    url\n    target\n    ariaLabel\n  }\n': typeof types.ExternalLinkFragmentDoc;
  '\n  fragment NavigationLink on NavigationLink {\n    __typename\n    label\n    ariaLabel\n    component {\n      ...PageContent\n    }\n    page {\n      __typename\n      id: _id\n      slug {\n        current\n      }\n    }\n  }\n': typeof types.NavigationLinkFragmentDoc;
  '\n  fragment SocialLink on SocialLink {\n    __typename\n    label\n    url\n    ariaLabel\n    icon\n  }\n': typeof types.SocialLinkFragmentDoc;
};
const documents: Documents = {
  '\n  fragment PageContent on Document {\n    id: _id\n    __typename\n  }\n':
    types.PageContentFragmentDoc,
  '\n  query getAllPages {\n    pages: allPage {\n      _id\n      slug {\n        current\n      }\n      landing\n      parent {\n        slug {\n          current\n        }\n      }\n    }\n  }\n':
    types.GetAllPagesDocument,
  '\n  query GetSettingsQuery {\n    settings: allSiteSettings(limit: 1) {\n      openGraphTitle\n      openGraphDescription\n      openGraphImage {\n        asset {\n          url\n        }\n      }\n      fallbackImage {\n        asset {\n          url\n        }\n      }\n      mainNavigation {\n        id: _id\n        _type\n      }\n      mainFooter {\n        id: _id\n        _type\n      }\n      nextPage\n      previousPage\n    }\n  }\n':
    types.GetSettingsQueryDocument,
  '\n  fragment PageData on Page {\n    id: _id\n    __typename\n    slug {\n      current\n    }\n    title\n    openGraph {\n      title\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n    headerVariant\n    content {\n      ...PageContent\n    }\n    overwrittenMainNavigation {\n      id: _id\n      _type\n    }\n    overwrittenFooter {\n      id: _id\n      _type\n    }\n  }\n':
    types.PageDataFragmentDoc,
  '\n  query GetPageBySlug($slug: String!) {\n    pages: allPage(where: { slug: { current: { eq: $slug } } }) {\n      ...PageData\n    }\n  }\n':
    types.GetPageBySlugDocument,
  '\n  query GetLandingPage {\n    pages: allPage(where: { landing: { eq: true } }) {\n      ...PageData\n    }\n  }\n':
    types.GetLandingPageDocument,
  '\n  fragment AboutSectionIdentifier on AboutSection {\n    __typename\n    id: _id\n  }\n':
    types.AboutSectionIdentifierFragmentDoc,
  '\n  query AboutSectionData($id: ID!) {\n    data: AboutSection(id: $id) {\n      _type\n      _key\n      title\n      content\n      image {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n':
    types.AboutSectionDataDocument,
  '\n  fragment FooterIdentifier on Footer {\n    __typename\n    id: _id\n    _type\n  }\n':
    types.FooterIdentifierFragmentDoc,
  '\n  query FooterData($id: ID!) {\n    data: Footer(id: $id) {\n      _id\n      _type\n      title\n      navigationItems {\n        _key\n        title\n        link {\n          ...ExternalLink\n          ...NavigationLink\n        }\n      }\n      copyright\n      socialLinks {\n        _key\n        label\n        url\n      }\n    }\n  }\n':
    types.FooterDataDocument,
  '\n  fragment GallerySectionIdentifier on GallerySection {\n    __typename\n    id: _key\n  }\n':
    types.GallerySectionIdentifierFragmentDoc,
  '\n  query GallerySectionData($id: ID!) {\n    data: GallerySection(id: $id) {\n      _type\n      _key\n      images {\n        asset {\n          url\n        }\n      }\n    }\n  }\n':
    types.GallerySectionDataDocument,
  '\n  fragment HeroSectionIdentifier on HeroSection {\n    __typename\n    id: _id\n  }\n':
    types.HeroSectionIdentifierFragmentDoc,
  '\n  query HeroSectionData($id: ID!) {\n    data: HeroSection(id: $id) {\n      _type\n      _key\n      title\n      subtitle\n      enabled\n      backgroundImage {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n      contentBlocks {\n        _key\n        _type\n        text\n        richText\n        variant\n        align\n        maxWidth\n      }\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n      variant\n    }\n  }\n':
    types.HeroSectionDataDocument,
  '\n  fragment IntroSectionIdentifier on IntroSection {\n    __typename\n    id: _id\n  }\n':
    types.IntroSectionIdentifierFragmentDoc,
  '\n  query IntroSectionData($id: ID!) {\n    data: IntroSection(id: $id) {\n      _type\n      _key\n      title\n      blocks {\n        ... on IntroTextBlock {\n          _key\n          _type\n          text\n        }\n        ... on IntroIconBlock {\n          _key\n          _type\n          iconType\n        }\n      }\n      content\n      subtitle\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n':
    types.IntroSectionDataDocument,
  '\n  fragment NavigationIdentifier on Navigation {\n    __typename\n    id: _id\n    _type\n  }\n':
    types.NavigationIdentifierFragmentDoc,
  '\n  query NavigationData($id: ID!) {\n    data: Navigation(id: $id) {\n      _type\n      _key\n      title\n      logo {\n        asset {\n          url\n        }\n      }\n      links {\n        ...NavigationLink\n      }\n    }\n  }\n':
    types.NavigationDataDocument,
  '\n  fragment NewsSectionIdentifier on NewsSection {\n    __typename\n    id: _id\n  }\n':
    types.NewsSectionIdentifierFragmentDoc,
  '\n  query NewsSectionData($id: ID!) {\n    data: NewsSection(id: $id) {\n      _type\n      _key\n      header {\n        title\n      }\n      enabled\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n':
    types.NewsSectionDataDocument,
  '\n  fragment ProgramSectionIdentifier on ProgramSection {\n    __typename\n    id: _id\n  }\n':
    types.ProgramSectionIdentifierFragmentDoc,
  '\n  query ProgramSectionData($id: ID!) {\n    data: ProgramSection(id: $id) {\n      _type\n      _key\n      header {\n        title\n      }\n      maxItems\n      enabled\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n':
    types.ProgramSectionDataDocument,
  '\n  fragment ExternalLink on ExternalLink {\n    __typename\n    label\n    url\n    target\n    ariaLabel\n  }\n':
    types.ExternalLinkFragmentDoc,
  '\n  fragment NavigationLink on NavigationLink {\n    __typename\n    label\n    ariaLabel\n    component {\n      ...PageContent\n    }\n    page {\n      __typename\n      id: _id\n      slug {\n        current\n      }\n    }\n  }\n':
    types.NavigationLinkFragmentDoc,
  '\n  fragment SocialLink on SocialLink {\n    __typename\n    label\n    url\n    ariaLabel\n    icon\n  }\n':
    types.SocialLinkFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PageContent on Document {\n    id: _id\n    __typename\n  }\n',
): (typeof documents)['\n  fragment PageContent on Document {\n    id: _id\n    __typename\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getAllPages {\n    pages: allPage {\n      _id\n      slug {\n        current\n      }\n      landing\n      parent {\n        slug {\n          current\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getAllPages {\n    pages: allPage {\n      _id\n      slug {\n        current\n      }\n      landing\n      parent {\n        slug {\n          current\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetSettingsQuery {\n    settings: allSiteSettings(limit: 1) {\n      openGraphTitle\n      openGraphDescription\n      openGraphImage {\n        asset {\n          url\n        }\n      }\n      fallbackImage {\n        asset {\n          url\n        }\n      }\n      mainNavigation {\n        id: _id\n        _type\n      }\n      mainFooter {\n        id: _id\n        _type\n      }\n      nextPage\n      previousPage\n    }\n  }\n',
): (typeof documents)['\n  query GetSettingsQuery {\n    settings: allSiteSettings(limit: 1) {\n      openGraphTitle\n      openGraphDescription\n      openGraphImage {\n        asset {\n          url\n        }\n      }\n      fallbackImage {\n        asset {\n          url\n        }\n      }\n      mainNavigation {\n        id: _id\n        _type\n      }\n      mainFooter {\n        id: _id\n        _type\n      }\n      nextPage\n      previousPage\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PageData on Page {\n    id: _id\n    __typename\n    slug {\n      current\n    }\n    title\n    openGraph {\n      title\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n    headerVariant\n    content {\n      ...PageContent\n    }\n    overwrittenMainNavigation {\n      id: _id\n      _type\n    }\n    overwrittenFooter {\n      id: _id\n      _type\n    }\n  }\n',
): (typeof documents)['\n  fragment PageData on Page {\n    id: _id\n    __typename\n    slug {\n      current\n    }\n    title\n    openGraph {\n      title\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n    headerVariant\n    content {\n      ...PageContent\n    }\n    overwrittenMainNavigation {\n      id: _id\n      _type\n    }\n    overwrittenFooter {\n      id: _id\n      _type\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetPageBySlug($slug: String!) {\n    pages: allPage(where: { slug: { current: { eq: $slug } } }) {\n      ...PageData\n    }\n  }\n',
): (typeof documents)['\n  query GetPageBySlug($slug: String!) {\n    pages: allPage(where: { slug: { current: { eq: $slug } } }) {\n      ...PageData\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetLandingPage {\n    pages: allPage(where: { landing: { eq: true } }) {\n      ...PageData\n    }\n  }\n',
): (typeof documents)['\n  query GetLandingPage {\n    pages: allPage(where: { landing: { eq: true } }) {\n      ...PageData\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AboutSectionIdentifier on AboutSection {\n    __typename\n    id: _id\n  }\n',
): (typeof documents)['\n  fragment AboutSectionIdentifier on AboutSection {\n    __typename\n    id: _id\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AboutSectionData($id: ID!) {\n    data: AboutSection(id: $id) {\n      _type\n      _key\n      title\n      content\n      image {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AboutSectionData($id: ID!) {\n    data: AboutSection(id: $id) {\n      _type\n      _key\n      title\n      content\n      image {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment FooterIdentifier on Footer {\n    __typename\n    id: _id\n    _type\n  }\n',
): (typeof documents)['\n  fragment FooterIdentifier on Footer {\n    __typename\n    id: _id\n    _type\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query FooterData($id: ID!) {\n    data: Footer(id: $id) {\n      _id\n      _type\n      title\n      navigationItems {\n        _key\n        title\n        link {\n          ...ExternalLink\n          ...NavigationLink\n        }\n      }\n      copyright\n      socialLinks {\n        _key\n        label\n        url\n      }\n    }\n  }\n',
): (typeof documents)['\n  query FooterData($id: ID!) {\n    data: Footer(id: $id) {\n      _id\n      _type\n      title\n      navigationItems {\n        _key\n        title\n        link {\n          ...ExternalLink\n          ...NavigationLink\n        }\n      }\n      copyright\n      socialLinks {\n        _key\n        label\n        url\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment GallerySectionIdentifier on GallerySection {\n    __typename\n    id: _key\n  }\n',
): (typeof documents)['\n  fragment GallerySectionIdentifier on GallerySection {\n    __typename\n    id: _key\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GallerySectionData($id: ID!) {\n    data: GallerySection(id: $id) {\n      _type\n      _key\n      images {\n        asset {\n          url\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GallerySectionData($id: ID!) {\n    data: GallerySection(id: $id) {\n      _type\n      _key\n      images {\n        asset {\n          url\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment HeroSectionIdentifier on HeroSection {\n    __typename\n    id: _id\n  }\n',
): (typeof documents)['\n  fragment HeroSectionIdentifier on HeroSection {\n    __typename\n    id: _id\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query HeroSectionData($id: ID!) {\n    data: HeroSection(id: $id) {\n      _type\n      _key\n      title\n      subtitle\n      enabled\n      backgroundImage {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n      contentBlocks {\n        _key\n        _type\n        text\n        richText\n        variant\n        align\n        maxWidth\n      }\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n      variant\n    }\n  }\n',
): (typeof documents)['\n  query HeroSectionData($id: ID!) {\n    data: HeroSection(id: $id) {\n      _type\n      _key\n      title\n      subtitle\n      enabled\n      backgroundImage {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n      contentBlocks {\n        _key\n        _type\n        text\n        richText\n        variant\n        align\n        maxWidth\n      }\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n      variant\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment IntroSectionIdentifier on IntroSection {\n    __typename\n    id: _id\n  }\n',
): (typeof documents)['\n  fragment IntroSectionIdentifier on IntroSection {\n    __typename\n    id: _id\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query IntroSectionData($id: ID!) {\n    data: IntroSection(id: $id) {\n      _type\n      _key\n      title\n      blocks {\n        ... on IntroTextBlock {\n          _key\n          _type\n          text\n        }\n        ... on IntroIconBlock {\n          _key\n          _type\n          iconType\n        }\n      }\n      content\n      subtitle\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n',
): (typeof documents)['\n  query IntroSectionData($id: ID!) {\n    data: IntroSection(id: $id) {\n      _type\n      _key\n      title\n      blocks {\n        ... on IntroTextBlock {\n          _key\n          _type\n          text\n        }\n        ... on IntroIconBlock {\n          _key\n          _type\n          iconType\n        }\n      }\n      content\n      subtitle\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NavigationIdentifier on Navigation {\n    __typename\n    id: _id\n    _type\n  }\n',
): (typeof documents)['\n  fragment NavigationIdentifier on Navigation {\n    __typename\n    id: _id\n    _type\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query NavigationData($id: ID!) {\n    data: Navigation(id: $id) {\n      _type\n      _key\n      title\n      logo {\n        asset {\n          url\n        }\n      }\n      links {\n        ...NavigationLink\n      }\n    }\n  }\n',
): (typeof documents)['\n  query NavigationData($id: ID!) {\n    data: Navigation(id: $id) {\n      _type\n      _key\n      title\n      logo {\n        asset {\n          url\n        }\n      }\n      links {\n        ...NavigationLink\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NewsSectionIdentifier on NewsSection {\n    __typename\n    id: _id\n  }\n',
): (typeof documents)['\n  fragment NewsSectionIdentifier on NewsSection {\n    __typename\n    id: _id\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query NewsSectionData($id: ID!) {\n    data: NewsSection(id: $id) {\n      _type\n      _key\n      header {\n        title\n      }\n      enabled\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n',
): (typeof documents)['\n  query NewsSectionData($id: ID!) {\n    data: NewsSection(id: $id) {\n      _type\n      _key\n      header {\n        title\n      }\n      enabled\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProgramSectionIdentifier on ProgramSection {\n    __typename\n    id: _id\n  }\n',
): (typeof documents)['\n  fragment ProgramSectionIdentifier on ProgramSection {\n    __typename\n    id: _id\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query ProgramSectionData($id: ID!) {\n    data: ProgramSection(id: $id) {\n      _type\n      _key\n      header {\n        title\n      }\n      maxItems\n      enabled\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n',
): (typeof documents)['\n  query ProgramSectionData($id: ID!) {\n    data: ProgramSection(id: $id) {\n      _type\n      _key\n      header {\n        title\n      }\n      maxItems\n      enabled\n      link {\n        ...ExternalLink\n        ...NavigationLink\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ExternalLink on ExternalLink {\n    __typename\n    label\n    url\n    target\n    ariaLabel\n  }\n',
): (typeof documents)['\n  fragment ExternalLink on ExternalLink {\n    __typename\n    label\n    url\n    target\n    ariaLabel\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NavigationLink on NavigationLink {\n    __typename\n    label\n    ariaLabel\n    component {\n      ...PageContent\n    }\n    page {\n      __typename\n      id: _id\n      slug {\n        current\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment NavigationLink on NavigationLink {\n    __typename\n    label\n    ariaLabel\n    component {\n      ...PageContent\n    }\n    page {\n      __typename\n      id: _id\n      slug {\n        current\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment SocialLink on SocialLink {\n    __typename\n    label\n    url\n    ariaLabel\n    icon\n  }\n',
): (typeof documents)['\n  fragment SocialLink on SocialLink {\n    __typename\n    label\n    url\n    ariaLabel\n    icon\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
