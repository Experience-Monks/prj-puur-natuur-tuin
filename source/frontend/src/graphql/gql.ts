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
  '\n  fragment HeroSectionIdentifier on HeroSection {\n    __typename\n    _key\n    _type\n  }\n': typeof types.HeroSectionIdentifierFragmentDoc;
  '\n  fragment HeroSectionFragment on HeroSection {\n    _type\n    _key\n    title\n    subtitle\n    enabled\n    backgroundImage {\n      asset {\n        url\n        metadata {\n          dimensions {\n            width\n            height\n          }\n        }\n      }\n    }\n    contentBlocks {\n      _key\n      _type\n      text\n      richText\n      variant\n      align\n      maxWidth\n    }\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n    variant\n  }\n': typeof types.HeroSectionFragmentFragmentDoc;
  '\n  query HeroSectionData {\n    allHeroSection {\n      _id\n      ...HeroSectionFragment\n    }\n  }\n': typeof types.HeroSectionDataDocument;
  '\n  fragment IntroSectionFragment on IntroSection {\n    __typename\n    _key\n    _type\n    _id\n    title\n    subtitle\n    enabled\n    content\n    blocks {\n      ... on IntroTextBlock {\n        _key\n        _type\n        text\n      }\n      ... on IntroIconBlock {\n        _key\n        _type\n        iconType\n      }\n    }\n    cta {\n      text\n      link {\n        linkType\n        internalLink {\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n': typeof types.IntroSectionFragmentFragmentDoc;
  '\n  query IntroSectionData {\n    allIntroSection {\n      _id\n      ...IntroSectionFragment\n    }\n  }\n': typeof types.IntroSectionDataDocument;
  '\n  fragment NewsSectionIdentifier on NewsSection {\n    __typename\n    _key\n    _type\n  }\n': typeof types.NewsSectionIdentifierFragmentDoc;
  '\n  fragment NewsSectionFragment on NewsSection {\n    _type\n    _key\n    header {\n      title\n    }\n    enabled\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n': typeof types.NewsSectionFragmentFragmentDoc;
  '\n  query NewsSectionData {\n    allNews(sort: { date: DESC }) {\n      _id\n      title\n      date\n      icon {\n        asset {\n          url\n        }\n      }\n    }\n  }\n': typeof types.NewsSectionDataDocument;
  '\n  fragment ProgramSectionIdentifier on ProgramSection {\n    __typename\n    _key\n    _type\n  }\n': typeof types.ProgramSectionIdentifierFragmentDoc;
  '\n  fragment ProgramSectionFragment on ProgramSection {\n    _type\n    _key\n    header {\n      title\n    }\n    enabled\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n': typeof types.ProgramSectionFragmentFragmentDoc;
  '\n  query ProgramSectionData {\n    allProgram(sort: { datetime: DESC }) {\n      _id\n      title\n      datetime\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n  }\n': typeof types.ProgramSectionDataDocument;
  '\n  fragment AboutSectionIdentifier on AboutSection {\n    __typename\n    _key\n    _type\n  }\n': typeof types.AboutSectionIdentifierFragmentDoc;
  '\n  fragment GallerySectionIdentifier on GallerySection {\n    __typename\n    _key\n    _type\n  }\n': typeof types.GallerySectionIdentifierFragmentDoc;
  '\n  fragment IntroSectionIdentifier on IntroSection {\n    __typename\n    _key\n    _type\n  }\n': typeof types.IntroSectionIdentifierFragmentDoc;
  '\n  fragment StickyNavigationIdentifier on StickyNavigation {\n    __typename\n    _key\n    _type\n  }\n': typeof types.StickyNavigationIdentifierFragmentDoc;
  '\n  query getAllPages {\n    allPage {\n      _id\n      slug {\n        current\n      }\n      landing\n      parent {\n        slug {\n          current\n        }\n      }\n    }\n  }\n': typeof types.GetAllPagesDocument;
  '\n  query getLandingPage {\n    landingPage: allPage(where: { landing: { eq: true } }) {\n      slug {\n        current\n      }\n    }\n  }\n': typeof types.GetLandingPageDocument;
  '\n  query getPageBySlug($slug: String!) {\n    pages: allPage(where: { slug: { current: { eq: $slug } } }) {\n      _id\n      title\n      openGraph {\n        title\n        description\n        image {\n          asset {\n            url\n          }\n        }\n      }\n      headerVariant\n      content {\n        __typename\n        ... on NewsSection {\n          _type\n          _key\n          header {\n            title\n          }\n          enabled\n          showButton\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n        ... on ProgramSection {\n          _type\n          _key\n          header {\n            title\n          }\n          enabled\n          showButton\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n        ... on IntroSection {\n          _type\n          _key\n          title\n          blocks {\n            ... on IntroTextBlock {\n              _key\n              _type\n              text\n            }\n            ... on IntroIconBlock {\n              _key\n              _type\n              iconType\n            }\n          }\n          content\n          subtitle\n          cta {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n          showButton\n          enabled\n        }\n        ... on HeroSection {\n          _type\n          _key\n          title\n          subtitle\n          enabled\n          backgroundImage {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  width\n                  height\n                }\n              }\n            }\n          }\n          contentBlocks {\n            _key\n            _type\n            text\n            richText\n            variant\n            align\n            maxWidth\n          }\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n          variant\n        }\n        ... on GallerySection {\n          _type\n          _key\n          images {\n            asset {\n              url\n            }\n          }\n          enabled\n        }\n        ... on AboutSection {\n          _type\n          _key\n          title\n          content\n          image {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  width\n                  height\n                }\n              }\n            }\n          }\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n      }\n      overwrittenMainNavigation {\n        _id\n        _type\n      }\n      overwrittenFooter {\n        _id\n        _type\n      }\n    }\n  }\n': typeof types.GetPageBySlugDocument;
  '\n  query getSettings {\n    settings: allSiteSettings(limit: 1) {\n      openGraphTitle\n      openGraphDescription\n      openGraphImage {\n        asset {\n          url\n        }\n      }\n      fallbackImage {\n        asset {\n          url\n        }\n      }\n      mainNavigation {\n        _id\n        _type\n      }\n      mainFooter {\n        _id\n        _type\n      }\n      nextPage\n      previousPage\n    }\n  }\n': typeof types.GetSettingsDocument;
};
const documents: Documents = {
  '\n  fragment HeroSectionIdentifier on HeroSection {\n    __typename\n    _key\n    _type\n  }\n':
    types.HeroSectionIdentifierFragmentDoc,
  '\n  fragment HeroSectionFragment on HeroSection {\n    _type\n    _key\n    title\n    subtitle\n    enabled\n    backgroundImage {\n      asset {\n        url\n        metadata {\n          dimensions {\n            width\n            height\n          }\n        }\n      }\n    }\n    contentBlocks {\n      _key\n      _type\n      text\n      richText\n      variant\n      align\n      maxWidth\n    }\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n    variant\n  }\n':
    types.HeroSectionFragmentFragmentDoc,
  '\n  query HeroSectionData {\n    allHeroSection {\n      _id\n      ...HeroSectionFragment\n    }\n  }\n':
    types.HeroSectionDataDocument,
  '\n  fragment IntroSectionFragment on IntroSection {\n    __typename\n    _key\n    _type\n    _id\n    title\n    subtitle\n    enabled\n    content\n    blocks {\n      ... on IntroTextBlock {\n        _key\n        _type\n        text\n      }\n      ... on IntroIconBlock {\n        _key\n        _type\n        iconType\n      }\n    }\n    cta {\n      text\n      link {\n        linkType\n        internalLink {\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n':
    types.IntroSectionFragmentFragmentDoc,
  '\n  query IntroSectionData {\n    allIntroSection {\n      _id\n      ...IntroSectionFragment\n    }\n  }\n':
    types.IntroSectionDataDocument,
  '\n  fragment NewsSectionIdentifier on NewsSection {\n    __typename\n    _key\n    _type\n  }\n':
    types.NewsSectionIdentifierFragmentDoc,
  '\n  fragment NewsSectionFragment on NewsSection {\n    _type\n    _key\n    header {\n      title\n    }\n    enabled\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n':
    types.NewsSectionFragmentFragmentDoc,
  '\n  query NewsSectionData {\n    allNews(sort: { date: DESC }) {\n      _id\n      title\n      date\n      icon {\n        asset {\n          url\n        }\n      }\n    }\n  }\n':
    types.NewsSectionDataDocument,
  '\n  fragment ProgramSectionIdentifier on ProgramSection {\n    __typename\n    _key\n    _type\n  }\n':
    types.ProgramSectionIdentifierFragmentDoc,
  '\n  fragment ProgramSectionFragment on ProgramSection {\n    _type\n    _key\n    header {\n      title\n    }\n    enabled\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n':
    types.ProgramSectionFragmentFragmentDoc,
  '\n  query ProgramSectionData {\n    allProgram(sort: { datetime: DESC }) {\n      _id\n      title\n      datetime\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n  }\n':
    types.ProgramSectionDataDocument,
  '\n  fragment AboutSectionIdentifier on AboutSection {\n    __typename\n    _key\n    _type\n  }\n':
    types.AboutSectionIdentifierFragmentDoc,
  '\n  fragment GallerySectionIdentifier on GallerySection {\n    __typename\n    _key\n    _type\n  }\n':
    types.GallerySectionIdentifierFragmentDoc,
  '\n  fragment IntroSectionIdentifier on IntroSection {\n    __typename\n    _key\n    _type\n  }\n':
    types.IntroSectionIdentifierFragmentDoc,
  '\n  fragment StickyNavigationIdentifier on StickyNavigation {\n    __typename\n    _key\n    _type\n  }\n':
    types.StickyNavigationIdentifierFragmentDoc,
  '\n  query getAllPages {\n    allPage {\n      _id\n      slug {\n        current\n      }\n      landing\n      parent {\n        slug {\n          current\n        }\n      }\n    }\n  }\n':
    types.GetAllPagesDocument,
  '\n  query getLandingPage {\n    landingPage: allPage(where: { landing: { eq: true } }) {\n      slug {\n        current\n      }\n    }\n  }\n':
    types.GetLandingPageDocument,
  '\n  query getPageBySlug($slug: String!) {\n    pages: allPage(where: { slug: { current: { eq: $slug } } }) {\n      _id\n      title\n      openGraph {\n        title\n        description\n        image {\n          asset {\n            url\n          }\n        }\n      }\n      headerVariant\n      content {\n        __typename\n        ... on NewsSection {\n          _type\n          _key\n          header {\n            title\n          }\n          enabled\n          showButton\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n        ... on ProgramSection {\n          _type\n          _key\n          header {\n            title\n          }\n          enabled\n          showButton\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n        ... on IntroSection {\n          _type\n          _key\n          title\n          blocks {\n            ... on IntroTextBlock {\n              _key\n              _type\n              text\n            }\n            ... on IntroIconBlock {\n              _key\n              _type\n              iconType\n            }\n          }\n          content\n          subtitle\n          cta {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n          showButton\n          enabled\n        }\n        ... on HeroSection {\n          _type\n          _key\n          title\n          subtitle\n          enabled\n          backgroundImage {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  width\n                  height\n                }\n              }\n            }\n          }\n          contentBlocks {\n            _key\n            _type\n            text\n            richText\n            variant\n            align\n            maxWidth\n          }\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n          variant\n        }\n        ... on GallerySection {\n          _type\n          _key\n          images {\n            asset {\n              url\n            }\n          }\n          enabled\n        }\n        ... on AboutSection {\n          _type\n          _key\n          title\n          content\n          image {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  width\n                  height\n                }\n              }\n            }\n          }\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n      }\n      overwrittenMainNavigation {\n        _id\n        _type\n      }\n      overwrittenFooter {\n        _id\n        _type\n      }\n    }\n  }\n':
    types.GetPageBySlugDocument,
  '\n  query getSettings {\n    settings: allSiteSettings(limit: 1) {\n      openGraphTitle\n      openGraphDescription\n      openGraphImage {\n        asset {\n          url\n        }\n      }\n      fallbackImage {\n        asset {\n          url\n        }\n      }\n      mainNavigation {\n        _id\n        _type\n      }\n      mainFooter {\n        _id\n        _type\n      }\n      nextPage\n      previousPage\n    }\n  }\n':
    types.GetSettingsDocument,
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
  source: '\n  fragment HeroSectionIdentifier on HeroSection {\n    __typename\n    _key\n    _type\n  }\n',
): (typeof documents)['\n  fragment HeroSectionIdentifier on HeroSection {\n    __typename\n    _key\n    _type\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment HeroSectionFragment on HeroSection {\n    _type\n    _key\n    title\n    subtitle\n    enabled\n    backgroundImage {\n      asset {\n        url\n        metadata {\n          dimensions {\n            width\n            height\n          }\n        }\n      }\n    }\n    contentBlocks {\n      _key\n      _type\n      text\n      richText\n      variant\n      align\n      maxWidth\n    }\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n    variant\n  }\n',
): (typeof documents)['\n  fragment HeroSectionFragment on HeroSection {\n    _type\n    _key\n    title\n    subtitle\n    enabled\n    backgroundImage {\n      asset {\n        url\n        metadata {\n          dimensions {\n            width\n            height\n          }\n        }\n      }\n    }\n    contentBlocks {\n      _key\n      _type\n      text\n      richText\n      variant\n      align\n      maxWidth\n    }\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n    variant\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query HeroSectionData {\n    allHeroSection {\n      _id\n      ...HeroSectionFragment\n    }\n  }\n',
): (typeof documents)['\n  query HeroSectionData {\n    allHeroSection {\n      _id\n      ...HeroSectionFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment IntroSectionFragment on IntroSection {\n    __typename\n    _key\n    _type\n    _id\n    title\n    subtitle\n    enabled\n    content\n    blocks {\n      ... on IntroTextBlock {\n        _key\n        _type\n        text\n      }\n      ... on IntroIconBlock {\n        _key\n        _type\n        iconType\n      }\n    }\n    cta {\n      text\n      link {\n        linkType\n        internalLink {\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment IntroSectionFragment on IntroSection {\n    __typename\n    _key\n    _type\n    _id\n    title\n    subtitle\n    enabled\n    content\n    blocks {\n      ... on IntroTextBlock {\n        _key\n        _type\n        text\n      }\n      ... on IntroIconBlock {\n        _key\n        _type\n        iconType\n      }\n    }\n    cta {\n      text\n      link {\n        linkType\n        internalLink {\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query IntroSectionData {\n    allIntroSection {\n      _id\n      ...IntroSectionFragment\n    }\n  }\n',
): (typeof documents)['\n  query IntroSectionData {\n    allIntroSection {\n      _id\n      ...IntroSectionFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NewsSectionIdentifier on NewsSection {\n    __typename\n    _key\n    _type\n  }\n',
): (typeof documents)['\n  fragment NewsSectionIdentifier on NewsSection {\n    __typename\n    _key\n    _type\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NewsSectionFragment on NewsSection {\n    _type\n    _key\n    header {\n      title\n    }\n    enabled\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment NewsSectionFragment on NewsSection {\n    _type\n    _key\n    header {\n      title\n    }\n    enabled\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query NewsSectionData {\n    allNews(sort: { date: DESC }) {\n      _id\n      title\n      date\n      icon {\n        asset {\n          url\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query NewsSectionData {\n    allNews(sort: { date: DESC }) {\n      _id\n      title\n      date\n      icon {\n        asset {\n          url\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProgramSectionIdentifier on ProgramSection {\n    __typename\n    _key\n    _type\n  }\n',
): (typeof documents)['\n  fragment ProgramSectionIdentifier on ProgramSection {\n    __typename\n    _key\n    _type\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProgramSectionFragment on ProgramSection {\n    _type\n    _key\n    header {\n      title\n    }\n    enabled\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment ProgramSectionFragment on ProgramSection {\n    _type\n    _key\n    header {\n      title\n    }\n    enabled\n    showButton\n    ctaButton {\n      text\n      link {\n        linkType\n        internalLink {\n          _id\n          slug {\n            current\n          }\n        }\n        externalUrl\n        emailAddress\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query ProgramSectionData {\n    allProgram(sort: { datetime: DESC }) {\n      _id\n      title\n      datetime\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query ProgramSectionData {\n    allProgram(sort: { datetime: DESC }) {\n      _id\n      title\n      datetime\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AboutSectionIdentifier on AboutSection {\n    __typename\n    _key\n    _type\n  }\n',
): (typeof documents)['\n  fragment AboutSectionIdentifier on AboutSection {\n    __typename\n    _key\n    _type\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment GallerySectionIdentifier on GallerySection {\n    __typename\n    _key\n    _type\n  }\n',
): (typeof documents)['\n  fragment GallerySectionIdentifier on GallerySection {\n    __typename\n    _key\n    _type\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment IntroSectionIdentifier on IntroSection {\n    __typename\n    _key\n    _type\n  }\n',
): (typeof documents)['\n  fragment IntroSectionIdentifier on IntroSection {\n    __typename\n    _key\n    _type\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment StickyNavigationIdentifier on StickyNavigation {\n    __typename\n    _key\n    _type\n  }\n',
): (typeof documents)['\n  fragment StickyNavigationIdentifier on StickyNavigation {\n    __typename\n    _key\n    _type\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getAllPages {\n    allPage {\n      _id\n      slug {\n        current\n      }\n      landing\n      parent {\n        slug {\n          current\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getAllPages {\n    allPage {\n      _id\n      slug {\n        current\n      }\n      landing\n      parent {\n        slug {\n          current\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getLandingPage {\n    landingPage: allPage(where: { landing: { eq: true } }) {\n      slug {\n        current\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getLandingPage {\n    landingPage: allPage(where: { landing: { eq: true } }) {\n      slug {\n        current\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getPageBySlug($slug: String!) {\n    pages: allPage(where: { slug: { current: { eq: $slug } } }) {\n      _id\n      title\n      openGraph {\n        title\n        description\n        image {\n          asset {\n            url\n          }\n        }\n      }\n      headerVariant\n      content {\n        __typename\n        ... on NewsSection {\n          _type\n          _key\n          header {\n            title\n          }\n          enabled\n          showButton\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n        ... on ProgramSection {\n          _type\n          _key\n          header {\n            title\n          }\n          enabled\n          showButton\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n        ... on IntroSection {\n          _type\n          _key\n          title\n          blocks {\n            ... on IntroTextBlock {\n              _key\n              _type\n              text\n            }\n            ... on IntroIconBlock {\n              _key\n              _type\n              iconType\n            }\n          }\n          content\n          subtitle\n          cta {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n          showButton\n          enabled\n        }\n        ... on HeroSection {\n          _type\n          _key\n          title\n          subtitle\n          enabled\n          backgroundImage {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  width\n                  height\n                }\n              }\n            }\n          }\n          contentBlocks {\n            _key\n            _type\n            text\n            richText\n            variant\n            align\n            maxWidth\n          }\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n          variant\n        }\n        ... on GallerySection {\n          _type\n          _key\n          images {\n            asset {\n              url\n            }\n          }\n          enabled\n        }\n        ... on AboutSection {\n          _type\n          _key\n          title\n          content\n          image {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  width\n                  height\n                }\n              }\n            }\n          }\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n      }\n      overwrittenMainNavigation {\n        _id\n        _type\n      }\n      overwrittenFooter {\n        _id\n        _type\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getPageBySlug($slug: String!) {\n    pages: allPage(where: { slug: { current: { eq: $slug } } }) {\n      _id\n      title\n      openGraph {\n        title\n        description\n        image {\n          asset {\n            url\n          }\n        }\n      }\n      headerVariant\n      content {\n        __typename\n        ... on NewsSection {\n          _type\n          _key\n          header {\n            title\n          }\n          enabled\n          showButton\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n        ... on ProgramSection {\n          _type\n          _key\n          header {\n            title\n          }\n          enabled\n          showButton\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n        ... on IntroSection {\n          _type\n          _key\n          title\n          blocks {\n            ... on IntroTextBlock {\n              _key\n              _type\n              text\n            }\n            ... on IntroIconBlock {\n              _key\n              _type\n              iconType\n            }\n          }\n          content\n          subtitle\n          cta {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n          showButton\n          enabled\n        }\n        ... on HeroSection {\n          _type\n          _key\n          title\n          subtitle\n          enabled\n          backgroundImage {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  width\n                  height\n                }\n              }\n            }\n          }\n          contentBlocks {\n            _key\n            _type\n            text\n            richText\n            variant\n            align\n            maxWidth\n          }\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n          variant\n        }\n        ... on GallerySection {\n          _type\n          _key\n          images {\n            asset {\n              url\n            }\n          }\n          enabled\n        }\n        ... on AboutSection {\n          _type\n          _key\n          title\n          content\n          image {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  width\n                  height\n                }\n              }\n            }\n          }\n          ctaButton {\n            text\n            link {\n              linkType\n              internalLink {\n                _id\n                slug {\n                  current\n                }\n              }\n              externalUrl\n              emailAddress\n            }\n          }\n        }\n      }\n      overwrittenMainNavigation {\n        _id\n        _type\n      }\n      overwrittenFooter {\n        _id\n        _type\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getSettings {\n    settings: allSiteSettings(limit: 1) {\n      openGraphTitle\n      openGraphDescription\n      openGraphImage {\n        asset {\n          url\n        }\n      }\n      fallbackImage {\n        asset {\n          url\n        }\n      }\n      mainNavigation {\n        _id\n        _type\n      }\n      mainFooter {\n        _id\n        _type\n      }\n      nextPage\n      previousPage\n    }\n  }\n',
): (typeof documents)['\n  query getSettings {\n    settings: allSiteSettings(limit: 1) {\n      openGraphTitle\n      openGraphDescription\n      openGraphImage {\n        asset {\n          url\n        }\n      }\n      fallbackImage {\n        asset {\n          url\n        }\n      }\n      mainNavigation {\n        _id\n        _type\n      }\n      mainFooter {\n        _id\n        _type\n      }\n      nextPage\n      previousPage\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
