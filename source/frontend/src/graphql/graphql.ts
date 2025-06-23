/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: string; output: string };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: string; output: string };
};

export type AboutSection = Document & {
  __typename: 'AboutSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Main text content for the about section */
  content?: Maybe<Scalars['String']['output']>;
  ctaButton?: Maybe<ButtonFragment>;
  /** Controls whether this section is displayed */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Image>;
  /** Space below the component */
  marginBottom?: Maybe<Scalars['String']['output']>;
  /** Space above the component */
  marginTop?: Maybe<Scalars['String']['output']>;
  /** Toggle to show or hide the call to action button */
  showButton?: Maybe<Scalars['Boolean']['output']>;
  /** Main heading for the about section */
  title?: Maybe<Scalars['String']['output']>;
};

export type AboutSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  content?: InputMaybe<StringFilter>;
  ctaButton?: InputMaybe<ButtonFragmentFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  image?: InputMaybe<ImageFilter>;
  marginBottom?: InputMaybe<StringFilter>;
  marginTop?: InputMaybe<StringFilter>;
  showButton?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AboutSectionOrGallerySectionOrHeroSectionOrIntroSectionOrNewsSectionOrProgramSection =
  | AboutSection
  | GallerySection
  | HeroSection
  | IntroSection
  | NewsSection
  | ProgramSection;

export type AboutSectionOrGallerySectionOrHeroSectionOrIntroSectionOrNewsSectionOrProgramSectionOrStickyNavigation =

    | AboutSection
    | GallerySection
    | HeroSection
    | IntroSection
    | NewsSection
    | ProgramSection
    | StickyNavigation;

export type AboutSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  ctaButton?: InputMaybe<ButtonFragmentSorting>;
  enabled?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  marginBottom?: InputMaybe<SortOrder>;
  marginTop?: InputMaybe<SortOrder>;
  showButton?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Block = {
  __typename: 'Block';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Span>>>;
  level?: Maybe<Scalars['Float']['output']>;
  listItem?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
};

export type BlockOrImage = Block | Image;

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonFragment = {
  __typename: 'ButtonFragment';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  link?: Maybe<LinkFragment>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ButtonFragmentFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  link?: InputMaybe<LinkFragmentFilter>;
  text?: InputMaybe<StringFilter>;
};

export type ButtonFragmentSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  link?: InputMaybe<LinkFragmentSorting>;
  text?: InputMaybe<SortOrder>;
};

export type Carousel = {
  __typename: 'Carousel';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
};

export type CarouselFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type CarouselSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type CrossDatasetReference = {
  __typename: 'CrossDatasetReference';
  _dataset?: Maybe<Scalars['String']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  _projectId?: Maybe<Scalars['String']['output']>;
  _ref?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  _weak?: Maybe<Scalars['Boolean']['output']>;
};

export type CrossDatasetReferenceFilter = {
  _dataset?: InputMaybe<StringFilter>;
  _key?: InputMaybe<StringFilter>;
  _projectId?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
  _dataset?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _projectId?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']['input']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename: 'File';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<SanityFileAsset>;
  media?: Maybe<GlobalDocumentReference>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
  media?: InputMaybe<GlobalDocumentReferenceFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  media?: InputMaybe<GlobalDocumentReferenceSorting>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = Document & {
  __typename: 'Footer';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  copyright?: Maybe<Scalars['String']['output']>;
  navigationItems?: Maybe<Array<Maybe<FooterNavigationItem>>>;
  socialLinks?: Maybe<Array<Maybe<SocialLink>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FooterFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  copyright?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FooterNavigationItem = {
  __typename: 'FooterNavigationItem';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  link?: Maybe<PageLink>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FooterNavigationItemFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  link?: InputMaybe<PageLinkFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FooterNavigationItemSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  link?: InputMaybe<PageLinkSorting>;
  title?: InputMaybe<SortOrder>;
};

export type FooterSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  copyright?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Gallery = Document & {
  __typename: 'Gallery';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
};

export type GalleryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type GallerySection = {
  __typename: 'GallerySection';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
};

export type GallerySectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  enabled?: InputMaybe<BooleanFilter>;
};

export type GallerySectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  enabled?: InputMaybe<SortOrder>;
};

export type GallerySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type Geopoint = {
  __typename: 'Geopoint';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  alt?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type GlobalDocumentReference = {
  __typename: 'GlobalDocumentReference';
  _key?: Maybe<Scalars['String']['output']>;
  _ref?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  _weak?: Maybe<Scalars['Boolean']['output']>;
};

export type GlobalDocumentReferenceFilter = {
  _key?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type GlobalDocumentReferenceSorting = {
  _key?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type HeroSection = Document & {
  __typename: 'HeroSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  backgroundImage?: Maybe<Image>;
  contentBlocks?: Maybe<Array<Maybe<TextBlock>>>;
  ctaButton?: Maybe<ButtonFragment>;
  /** Controls whether this section is displayed */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Space below the component */
  marginBottom?: Maybe<Scalars['String']['output']>;
  /** Space above the component */
  marginTop?: Maybe<Scalars['String']['output']>;
  /** Toggle to show or hide the call to action button */
  showButton?: Maybe<Scalars['Boolean']['output']>;
  /** Secondary heading for the hero section */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Main heading for the hero section */
  title?: Maybe<Scalars['String']['output']>;
  /** Select the layout style for this hero section */
  variant?: Maybe<Scalars['String']['output']>;
};

export type HeroSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  backgroundImage?: InputMaybe<ImageFilter>;
  ctaButton?: InputMaybe<ButtonFragmentFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  marginBottom?: InputMaybe<StringFilter>;
  marginTop?: InputMaybe<StringFilter>;
  showButton?: InputMaybe<BooleanFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  variant?: InputMaybe<StringFilter>;
};

export type HeroSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  backgroundImage?: InputMaybe<ImageSorting>;
  ctaButton?: InputMaybe<ButtonFragmentSorting>;
  enabled?: InputMaybe<SortOrder>;
  marginBottom?: InputMaybe<SortOrder>;
  marginTop?: InputMaybe<SortOrder>;
  showButton?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  variant?: InputMaybe<SortOrder>;
};

export type Homepage = Document & {
  __typename: 'Homepage';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  content?: Maybe<
    Array<
      Maybe<AboutSectionOrGallerySectionOrHeroSectionOrIntroSectionOrNewsSectionOrProgramSection>
    >
  >;
  /** A short description of the homepage (used for SEO) */
  description?: Maybe<Scalars['String']['output']>;
  openGraph?: Maybe<OpenGraph>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HomepageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  openGraph?: InputMaybe<OpenGraphFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HomepageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  openGraph?: InputMaybe<OpenGraphSorting>;
  title?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']['input']>;
  nin?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type IconBlock = {
  __typename: 'IconBlock';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Image>;
};

export type IconBlockFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  altText?: InputMaybe<StringFilter>;
  icon?: InputMaybe<ImageFilter>;
};

export type IconBlockSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  icon?: InputMaybe<ImageSorting>;
};

export type Image = {
  __typename: 'Image';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
  media?: Maybe<GlobalDocumentReference>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
  media?: InputMaybe<GlobalDocumentReferenceFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
  media?: InputMaybe<GlobalDocumentReferenceSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type IntroIconBlock = {
  __typename: 'IntroIconBlock';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  iconType?: Maybe<Scalars['String']['output']>;
};

export type IntroIconBlockFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  iconType?: InputMaybe<StringFilter>;
};

export type IntroIconBlockOrIntroTextBlock = IntroIconBlock | IntroTextBlock;

export type IntroIconBlockSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  iconType?: InputMaybe<SortOrder>;
};

export type IntroSection = Document & {
  __typename: 'IntroSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  blocks?: Maybe<Array<Maybe<IntroIconBlockOrIntroTextBlock>>>;
  content?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<ButtonFragment>;
  /** Controls whether this section is displayed */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Space below the component */
  marginBottom?: Maybe<Scalars['String']['output']>;
  /** Space above the component */
  marginTop?: Maybe<Scalars['String']['output']>;
  /** Toggle to show or hide the call to action button */
  showButton?: Maybe<Scalars['Boolean']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type IntroSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  content?: InputMaybe<StringFilter>;
  cta?: InputMaybe<ButtonFragmentFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  marginBottom?: InputMaybe<StringFilter>;
  marginTop?: InputMaybe<StringFilter>;
  showButton?: InputMaybe<BooleanFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type IntroSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  cta?: InputMaybe<ButtonFragmentSorting>;
  enabled?: InputMaybe<SortOrder>;
  marginBottom?: InputMaybe<SortOrder>;
  marginTop?: InputMaybe<SortOrder>;
  showButton?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type IntroTextBlock = {
  __typename: 'IntroTextBlock';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type IntroTextBlockFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
};

export type IntroTextBlockSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type LinkFragment = {
  __typename: 'LinkFragment';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  /** Enter email address without "mailto:" prefix (e.g., contact@example.com) */
  emailAddress?: Maybe<Scalars['String']['output']>;
  /** Include the full URL with protocol (e.g., https://example.com) */
  externalUrl?: Maybe<Scalars['String']['output']>;
  internalLink?: Maybe<Page>;
  linkType?: Maybe<Scalars['String']['output']>;
};

export type LinkFragmentFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  emailAddress?: InputMaybe<StringFilter>;
  externalUrl?: InputMaybe<StringFilter>;
  internalLink?: InputMaybe<PageFilter>;
  linkType?: InputMaybe<StringFilter>;
};

export type LinkFragmentSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  externalUrl?: InputMaybe<SortOrder>;
  linkType?: InputMaybe<SortOrder>;
};

export type Navigation = Document & {
  __typename: 'Navigation';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  showInFooter?: Maybe<Scalars['Boolean']['output']>;
  showInHeader?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type NavigationFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  order?: InputMaybe<FloatFilter>;
  showInFooter?: InputMaybe<BooleanFilter>;
  showInHeader?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type NavigationLink = {
  __typename: 'NavigationLink';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  /** Select the section to scroll to */
  sectionId?: Maybe<Scalars['String']['output']>;
};

export type NavigationLinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  sectionId?: InputMaybe<StringFilter>;
};

export type NavigationLinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  sectionId?: InputMaybe<SortOrder>;
};

export type NavigationSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  showInFooter?: InputMaybe<SortOrder>;
  showInHeader?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type News = Document & {
  __typename: 'News';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  icon?: Maybe<Image>;
  title?: Maybe<Scalars['String']['output']>;
};

export type NewsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  date?: InputMaybe<DateFilter>;
  icon?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type NewsSection = Document & {
  __typename: 'NewsSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  ctaButton?: Maybe<ButtonFragment>;
  displayMode?: Maybe<Scalars['String']['output']>;
  /** Controls whether this section is displayed */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  header?: Maybe<SectionHeader>;
  manualItems?: Maybe<Array<Maybe<News>>>;
  /** Space below the component */
  marginBottom?: Maybe<Scalars['String']['output']>;
  /** Space above the component */
  marginTop?: Maybe<Scalars['String']['output']>;
  maxItems?: Maybe<Scalars['Float']['output']>;
  /** Toggle to show or hide the call to action button */
  showButton?: Maybe<Scalars['Boolean']['output']>;
};

export type NewsSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  ctaButton?: InputMaybe<ButtonFragmentFilter>;
  displayMode?: InputMaybe<StringFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  header?: InputMaybe<SectionHeaderFilter>;
  marginBottom?: InputMaybe<StringFilter>;
  marginTop?: InputMaybe<StringFilter>;
  maxItems?: InputMaybe<FloatFilter>;
  showButton?: InputMaybe<BooleanFilter>;
};

export type NewsSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  ctaButton?: InputMaybe<ButtonFragmentSorting>;
  displayMode?: InputMaybe<SortOrder>;
  enabled?: InputMaybe<SortOrder>;
  header?: InputMaybe<SectionHeaderSorting>;
  marginBottom?: InputMaybe<SortOrder>;
  marginTop?: InputMaybe<SortOrder>;
  maxItems?: InputMaybe<SortOrder>;
  showButton?: InputMaybe<SortOrder>;
};

export type NewsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  icon?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type OpenGraph = {
  __typename: 'OpenGraph';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  /** Shown in search engine results and when shared on social media */
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  /** Shown in search engine results and when shared on social media */
  title?: Maybe<Scalars['String']['output']>;
};

export type OpenGraphFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type OpenGraphSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Page = Document & {
  __typename: 'Page';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  content?: Maybe<
    Array<
      Maybe<AboutSectionOrGallerySectionOrHeroSectionOrIntroSectionOrNewsSectionOrProgramSectionOrStickyNavigation>
    >
  >;
  /** Optional variant for the header */
  headerVariant?: Maybe<Scalars['String']['output']>;
  /** Set to true if this is the homepage/landing page */
  landing?: Maybe<Scalars['Boolean']['output']>;
  openGraph?: Maybe<OpenGraph>;
  /** Optional custom footer for this page */
  overwrittenFooter?: Maybe<Footer>;
  /** Optional custom navigation for this page */
  overwrittenMainNavigation?: Maybe<Navigation>;
  /** Select a parent page to create a hierarchical structure */
  parent?: Maybe<Page>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  headerVariant?: InputMaybe<StringFilter>;
  landing?: InputMaybe<BooleanFilter>;
  openGraph?: InputMaybe<OpenGraphFilter>;
  overwrittenFooter?: InputMaybe<FooterFilter>;
  overwrittenMainNavigation?: InputMaybe<NavigationFilter>;
  parent?: InputMaybe<PageFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageLink = {
  __typename: 'PageLink';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  /** Link to an external website */
  externalUrl?: Maybe<Scalars['String']['output']>;
  /** Link to an internal page */
  page?: Maybe<Page>;
};

export type PageLinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  externalUrl?: InputMaybe<StringFilter>;
  page?: InputMaybe<PageFilter>;
};

export type PageLinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  externalUrl?: InputMaybe<SortOrder>;
};

export type PageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  headerVariant?: InputMaybe<SortOrder>;
  landing?: InputMaybe<SortOrder>;
  openGraph?: InputMaybe<OpenGraphSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Program = Document & {
  __typename: 'Program';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  datetime?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Image>;
  image?: Maybe<Image>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ProgramFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  datetime?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  featured?: InputMaybe<BooleanFilter>;
  icon?: InputMaybe<ImageFilter>;
  image?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProgramSection = Document & {
  __typename: 'ProgramSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  ctaButton?: Maybe<ButtonFragment>;
  displayMode?: Maybe<Scalars['String']['output']>;
  /** Controls whether this section is displayed */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  header?: Maybe<SectionHeader>;
  manualItems?: Maybe<Array<Maybe<Program>>>;
  /** Space below the component */
  marginBottom?: Maybe<Scalars['String']['output']>;
  /** Space above the component */
  marginTop?: Maybe<Scalars['String']['output']>;
  maxItems?: Maybe<Scalars['Float']['output']>;
  /** Toggle to show or hide the call to action button */
  showButton?: Maybe<Scalars['Boolean']['output']>;
};

export type ProgramSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  ctaButton?: InputMaybe<ButtonFragmentFilter>;
  displayMode?: InputMaybe<StringFilter>;
  enabled?: InputMaybe<BooleanFilter>;
  header?: InputMaybe<SectionHeaderFilter>;
  marginBottom?: InputMaybe<StringFilter>;
  marginTop?: InputMaybe<StringFilter>;
  maxItems?: InputMaybe<FloatFilter>;
  showButton?: InputMaybe<BooleanFilter>;
};

export type ProgramSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  ctaButton?: InputMaybe<ButtonFragmentSorting>;
  displayMode?: InputMaybe<SortOrder>;
  enabled?: InputMaybe<SortOrder>;
  header?: InputMaybe<SectionHeaderSorting>;
  marginBottom?: InputMaybe<SortOrder>;
  marginTop?: InputMaybe<SortOrder>;
  maxItems?: InputMaybe<SortOrder>;
  showButton?: InputMaybe<SortOrder>;
};

export type ProgramSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  datetime?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  featured?: InputMaybe<SortOrder>;
  icon?: InputMaybe<ImageSorting>;
  image?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename: 'RootQuery';
  AboutSection?: Maybe<AboutSection>;
  Document?: Maybe<Document>;
  Footer?: Maybe<Footer>;
  Gallery?: Maybe<Gallery>;
  HeroSection?: Maybe<HeroSection>;
  Homepage?: Maybe<Homepage>;
  IntroSection?: Maybe<IntroSection>;
  Navigation?: Maybe<Navigation>;
  News?: Maybe<News>;
  NewsSection?: Maybe<NewsSection>;
  Page?: Maybe<Page>;
  Program?: Maybe<Program>;
  ProgramSection?: Maybe<ProgramSection>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  SiteSettings?: Maybe<SiteSettings>;
  allAboutSection: Array<AboutSection>;
  allDocument: Array<Document>;
  allFooter: Array<Footer>;
  allGallery: Array<Gallery>;
  allHeroSection: Array<HeroSection>;
  allHomepage: Array<Homepage>;
  allIntroSection: Array<IntroSection>;
  allNavigation: Array<Navigation>;
  allNews: Array<News>;
  allNewsSection: Array<NewsSection>;
  allPage: Array<Page>;
  allProgram: Array<Program>;
  allProgramSection: Array<ProgramSection>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSiteSettings: Array<SiteSettings>;
};

export type RootQueryAboutSectionArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryDocumentArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryFooterArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryGalleryArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryHeroSectionArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryHomepageArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryIntroSectionArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryNavigationArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryNewsArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryNewsSectionArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryPageArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryProgramArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryProgramSectionArgs = {
  id: Scalars['ID']['input'];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']['input'];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']['input'];
};

export type RootQuerySiteSettingsArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryAllAboutSectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AboutSectionSorting>>;
  where?: InputMaybe<AboutSectionFilter>;
};

export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllFooterArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FooterSorting>>;
  where?: InputMaybe<FooterFilter>;
};

export type RootQueryAllGalleryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GallerySorting>>;
  where?: InputMaybe<GalleryFilter>;
};

export type RootQueryAllHeroSectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<HeroSectionSorting>>;
  where?: InputMaybe<HeroSectionFilter>;
};

export type RootQueryAllHomepageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<HomepageSorting>>;
  where?: InputMaybe<HomepageFilter>;
};

export type RootQueryAllIntroSectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<IntroSectionSorting>>;
  where?: InputMaybe<IntroSectionFilter>;
};

export type RootQueryAllNavigationArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NavigationSorting>>;
  where?: InputMaybe<NavigationFilter>;
};

export type RootQueryAllNewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NewsSorting>>;
  where?: InputMaybe<NewsFilter>;
};

export type RootQueryAllNewsSectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NewsSectionSorting>>;
  where?: InputMaybe<NewsSectionFilter>;
};

export type RootQueryAllPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PageSorting>>;
  where?: InputMaybe<PageFilter>;
};

export type RootQueryAllProgramArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProgramSorting>>;
  where?: InputMaybe<ProgramFilter>;
};

export type RootQueryAllProgramSectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProgramSectionSorting>>;
  where?: InputMaybe<ProgramSectionFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};

export type RootQueryAllSiteSettingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SiteSettingsSorting>>;
  where?: InputMaybe<SiteSettingsFilter>;
};

export type SanityAssetSourceData = {
  __typename: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']['output']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']['output']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  assetId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  sha1hash?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']['output']>;
  uploadId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  assetId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  sha1hash?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']['output']>;
  uploadId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  bottom?: Maybe<Scalars['Float']['output']>;
  left?: Maybe<Scalars['Float']['output']>;
  right?: Maybe<Scalars['Float']['output']>;
  top?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  blurHash?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']['output']>;
  isOpaque?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']['output']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  foreground?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SanityDocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']['input']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']['input']>;
};

export type SectionHeader = {
  __typename: 'SectionHeader';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SectionHeaderFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SectionHeaderSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Seo = {
  __typename: 'Seo';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  ogImage?: Maybe<Image>;
};

export type SeoFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  metaDescription?: InputMaybe<StringFilter>;
  metaTitle?: InputMaybe<StringFilter>;
  ogImage?: InputMaybe<ImageFilter>;
};

export type SeoSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  ogImage?: InputMaybe<ImageSorting>;
};

export type SiteSettings = Document & {
  __typename: 'SiteSettings';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  fallbackImage?: Maybe<Image>;
  footerText?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Image>;
  mainFooter?: Maybe<Footer>;
  mainNavigation?: Maybe<Navigation>;
  nextPage?: Maybe<Scalars['String']['output']>;
  openGraphDescription?: Maybe<Scalars['String']['output']>;
  openGraphImage?: Maybe<Image>;
  openGraphTitle?: Maybe<Scalars['String']['output']>;
  previousPage?: Maybe<Scalars['String']['output']>;
  siteTitle?: Maybe<Scalars['String']['output']>;
  socialLinks?: Maybe<Array<Maybe<SocialLink>>>;
};

export type SiteSettingsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<SanityDocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  contactEmail?: InputMaybe<StringFilter>;
  fallbackImage?: InputMaybe<ImageFilter>;
  footerText?: InputMaybe<StringFilter>;
  logo?: InputMaybe<ImageFilter>;
  mainFooter?: InputMaybe<FooterFilter>;
  mainNavigation?: InputMaybe<NavigationFilter>;
  nextPage?: InputMaybe<StringFilter>;
  openGraphDescription?: InputMaybe<StringFilter>;
  openGraphImage?: InputMaybe<ImageFilter>;
  openGraphTitle?: InputMaybe<StringFilter>;
  previousPage?: InputMaybe<StringFilter>;
  siteTitle?: InputMaybe<StringFilter>;
};

export type SiteSettingsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  contactEmail?: InputMaybe<SortOrder>;
  fallbackImage?: InputMaybe<ImageSorting>;
  footerText?: InputMaybe<SortOrder>;
  logo?: InputMaybe<ImageSorting>;
  nextPage?: InputMaybe<SortOrder>;
  openGraphDescription?: InputMaybe<SortOrder>;
  openGraphImage?: InputMaybe<ImageSorting>;
  openGraphTitle?: InputMaybe<SortOrder>;
  previousPage?: InputMaybe<SortOrder>;
  siteTitle?: InputMaybe<SortOrder>;
};

export type Slug = {
  __typename: 'Slug';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  current?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
};

export type SocialLink = {
  __typename: 'SocialLink';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SocialLinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SocialLinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC',
}

export type Span = {
  __typename: 'Span';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  marks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  text?: Maybe<Scalars['String']['output']>;
};

export type StickyNavigation = {
  __typename: 'StickyNavigation';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Array<Maybe<NavigationLink>>>;
  logo?: Maybe<Image>;
  /** Navigation title (for internal reference only) */
  title?: Maybe<Scalars['String']['output']>;
};

export type StickyNavigationFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  logo?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type StickyNavigationSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  logo?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TextBlock = {
  __typename: 'TextBlock';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  align?: Maybe<Scalars['String']['output']>;
  /** Optional maximum width in pixels (leave empty for full width) */
  maxWidth?: Maybe<Scalars['Float']['output']>;
  richText?: Maybe<Scalars['Boolean']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type TextBlockFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  align?: InputMaybe<StringFilter>;
  maxWidth?: InputMaybe<FloatFilter>;
  richText?: InputMaybe<BooleanFilter>;
  text?: InputMaybe<StringFilter>;
  variant?: InputMaybe<StringFilter>;
};

export type TextBlockSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  align?: InputMaybe<SortOrder>;
  maxWidth?: InputMaybe<SortOrder>;
  richText?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  variant?: InputMaybe<SortOrder>;
};

type PageContentAboutSectionFragment = { __typename: 'AboutSection'; id?: string | null };

type PageContentFooterFragment = { __typename: 'Footer'; id?: string | null };

type PageContentGalleryFragment = { __typename: 'Gallery'; id?: string | null };

type PageContentHeroSectionFragment = { __typename: 'HeroSection'; id?: string | null };

type PageContentHomepageFragment = { __typename: 'Homepage'; id?: string | null };

type PageContentIntroSectionFragment = { __typename: 'IntroSection'; id?: string | null };

type PageContentNavigationFragment = { __typename: 'Navigation'; id?: string | null };

type PageContentNewsFragment = { __typename: 'News'; id?: string | null };

type PageContentNewsSectionFragment = { __typename: 'NewsSection'; id?: string | null };

type PageContentPageFragment = { __typename: 'Page'; id?: string | null };

type PageContentProgramFragment = { __typename: 'Program'; id?: string | null };

type PageContentProgramSectionFragment = { __typename: 'ProgramSection'; id?: string | null };

type PageContentSanityFileAssetFragment = { __typename: 'SanityFileAsset'; id?: string | null };

type PageContentSanityImageAssetFragment = { __typename: 'SanityImageAsset'; id?: string | null };

type PageContentSiteSettingsFragment = { __typename: 'SiteSettings'; id?: string | null };

export type PageContentFragment =
  | PageContentAboutSectionFragment
  | PageContentFooterFragment
  | PageContentGalleryFragment
  | PageContentHeroSectionFragment
  | PageContentHomepageFragment
  | PageContentIntroSectionFragment
  | PageContentNavigationFragment
  | PageContentNewsFragment
  | PageContentNewsSectionFragment
  | PageContentPageFragment
  | PageContentProgramFragment
  | PageContentProgramSectionFragment
  | PageContentSanityFileAssetFragment
  | PageContentSanityImageAssetFragment
  | PageContentSiteSettingsFragment;

export type GetLandingPageQueryVariables = Exact<{ [key: string]: never }>;

export type GetLandingPageQuery = {
  __typename: 'RootQuery';
  landingPage: Array<{
    __typename: 'Page';
    slug?: { __typename: 'Slug'; current?: string | null } | null;
  }>;
};

export type GetAllPagesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPagesQuery = {
  __typename: 'RootQuery';
  pages: Array<{
    __typename: 'Page';
    _id?: string | null;
    landing?: boolean | null;
    slug?: { __typename: 'Slug'; current?: string | null } | null;
    parent?: {
      __typename: 'Page';
      slug?: { __typename: 'Slug'; current?: string | null } | null;
    } | null;
  }>;
};

export type GetSettingsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type GetSettingsQueryQuery = {
  __typename: 'RootQuery';
  settings: Array<{
    __typename: 'SiteSettings';
    openGraphTitle?: string | null;
    openGraphDescription?: string | null;
    nextPage?: string | null;
    previousPage?: string | null;
    openGraphImage?: {
      __typename: 'Image';
      asset?: { __typename: 'SanityImageAsset'; url?: string | null } | null;
    } | null;
    fallbackImage?: {
      __typename: 'Image';
      asset?: { __typename: 'SanityImageAsset'; url?: string | null } | null;
    } | null;
    mainNavigation?: {
      __typename: 'Navigation';
      _id?: string | null;
      _type?: string | null;
    } | null;
    mainFooter?: { __typename: 'Footer'; _id?: string | null; _type?: string | null } | null;
  }>;
};

export type LandingPageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type LandingPageQueryQuery = {
  __typename: 'RootQuery';
  landingPage: Array<{
    __typename: 'Page';
    _id?: string | null;
    title?: string | null;
    slug?: { __typename: 'Slug'; current?: string | null } | null;
    content?: Array<
      | { __typename: 'AboutSection'; id?: string | null }
      | { __typename: 'GallerySection' }
      | { __typename: 'HeroSection'; id?: string | null }
      | { __typename: 'IntroSection'; id?: string | null }
      | { __typename: 'NewsSection'; id?: string | null }
      | { __typename: 'ProgramSection'; id?: string | null }
      | { __typename: 'StickyNavigation' }
      | null
    > | null;
  }>;
};

export type PageQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;

export type PageQueryQuery = {
  __typename: 'RootQuery';
  pages: Array<{
    __typename: 'Page';
    title?: string | null;
    headerVariant?: string | null;
    id?: string | null;
    slug?: { __typename: 'Slug'; current?: string | null } | null;
    openGraph?: {
      __typename: 'OpenGraph';
      title?: string | null;
      description?: string | null;
      image?: {
        __typename: 'Image';
        asset?: { __typename: 'SanityImageAsset'; url?: string | null } | null;
      } | null;
    } | null;
    content?: Array<
      | { __typename: 'AboutSection'; id?: string | null }
      | { __typename: 'GallerySection' }
      | { __typename: 'HeroSection'; id?: string | null }
      | { __typename: 'IntroSection'; id?: string | null }
      | { __typename: 'NewsSection'; id?: string | null }
      | { __typename: 'ProgramSection'; id?: string | null }
      | { __typename: 'StickyNavigation' }
      | null
    > | null;
    overwrittenMainNavigation?: {
      __typename: 'Navigation';
      _id?: string | null;
      _type?: string | null;
    } | null;
    overwrittenFooter?: { __typename: 'Footer'; _id?: string | null; _type?: string | null } | null;
  }>;
};

export type AboutSectionIdentifierFragment = { __typename: 'AboutSection'; id?: string | null };

export type AboutSectionDataQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type AboutSectionDataQuery = {
  __typename: 'RootQuery';
  data?: {
    __typename: 'AboutSection';
    _type?: string | null;
    _key?: string | null;
    title?: string | null;
    content?: string | null;
    image?: {
      __typename: 'Image';
      asset?: {
        __typename: 'SanityImageAsset';
        url?: string | null;
        metadata?: {
          __typename: 'SanityImageMetadata';
          dimensions?: {
            __typename: 'SanityImageDimensions';
            width?: number | null;
            height?: number | null;
          } | null;
        } | null;
      } | null;
    } | null;
    ctaButton?: {
      __typename: 'ButtonFragment';
      text?: string | null;
      link?: {
        __typename: 'LinkFragment';
        linkType?: string | null;
        externalUrl?: string | null;
        emailAddress?: string | null;
        internalLink?: {
          __typename: 'Page';
          _id?: string | null;
          slug?: { __typename: 'Slug'; current?: string | null } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GallerySectionIdentifierFragment = { __typename: 'GallerySection'; id?: string | null };

export type GallerySectionDataQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GallerySectionDataQuery = {
  __typename: 'RootQuery';
  data?: {
    __typename: 'Gallery';
    _type?: string | null;
    _key?: string | null;
    images?: Array<{
      __typename: 'Image';
      asset?: { __typename: 'SanityImageAsset'; url?: string | null } | null;
    } | null> | null;
  } | null;
};

export type HeroSectionIdentifierFragment = { __typename: 'HeroSection'; id?: string | null };

export type HeroSectionDataQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type HeroSectionDataQuery = {
  __typename: 'RootQuery';
  data?: {
    __typename: 'HeroSection';
    _type?: string | null;
    _key?: string | null;
    title?: string | null;
    subtitle?: string | null;
    enabled?: boolean | null;
    variant?: string | null;
    backgroundImage?: {
      __typename: 'Image';
      asset?: {
        __typename: 'SanityImageAsset';
        url?: string | null;
        metadata?: {
          __typename: 'SanityImageMetadata';
          dimensions?: {
            __typename: 'SanityImageDimensions';
            width?: number | null;
            height?: number | null;
          } | null;
        } | null;
      } | null;
    } | null;
    contentBlocks?: Array<{
      __typename: 'TextBlock';
      _key?: string | null;
      _type?: string | null;
      text?: string | null;
      richText?: boolean | null;
      variant?: string | null;
      align?: string | null;
      maxWidth?: number | null;
    } | null> | null;
    ctaButton?: {
      __typename: 'ButtonFragment';
      text?: string | null;
      link?: {
        __typename: 'LinkFragment';
        linkType?: string | null;
        externalUrl?: string | null;
        emailAddress?: string | null;
        internalLink?: {
          __typename: 'Page';
          _id?: string | null;
          slug?: { __typename: 'Slug'; current?: string | null } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type IntroSectionIdentifierFragment = { __typename: 'IntroSection'; id?: string | null };

export type IntroSectionDataQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type IntroSectionDataQuery = {
  __typename: 'RootQuery';
  data?: {
    __typename: 'IntroSection';
    _type?: string | null;
    _key?: string | null;
    title?: string | null;
    content?: string | null;
    subtitle?: string | null;
    showButton?: boolean | null;
    enabled?: boolean | null;
    blocks?: Array<
      | {
          __typename: 'IntroIconBlock';
          _key?: string | null;
          _type?: string | null;
          iconType?: string | null;
        }
      | {
          __typename: 'IntroTextBlock';
          _key?: string | null;
          _type?: string | null;
          text?: string | null;
        }
      | null
    > | null;
    cta?: {
      __typename: 'ButtonFragment';
      text?: string | null;
      link?: {
        __typename: 'LinkFragment';
        linkType?: string | null;
        externalUrl?: string | null;
        emailAddress?: string | null;
        internalLink?: {
          __typename: 'Page';
          _id?: string | null;
          slug?: { __typename: 'Slug'; current?: string | null } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type NewsSectionIdentifierFragment = { __typename: 'NewsSection'; id?: string | null };

export type NewsSectionDataQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type NewsSectionDataQuery = {
  __typename: 'RootQuery';
  data?: {
    __typename: 'NewsSection';
    _type?: string | null;
    _key?: string | null;
    enabled?: boolean | null;
    showButton?: boolean | null;
    header?: { __typename: 'SectionHeader'; title?: string | null } | null;
    ctaButton?: {
      __typename: 'ButtonFragment';
      text?: string | null;
      link?: {
        __typename: 'LinkFragment';
        linkType?: string | null;
        externalUrl?: string | null;
        emailAddress?: string | null;
        internalLink?: {
          __typename: 'Page';
          _id?: string | null;
          slug?: { __typename: 'Slug'; current?: string | null } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type ProgramSectionIdentifierFragment = { __typename: 'ProgramSection'; id?: string | null };

export type ProgramSectionDataQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type ProgramSectionDataQuery = {
  __typename: 'RootQuery';
  data?: {
    __typename: 'ProgramSection';
    _type?: string | null;
    _key?: string | null;
    maxItems?: number | null;
    enabled?: boolean | null;
    showButton?: boolean | null;
    header?: { __typename: 'SectionHeader'; title?: string | null } | null;
    ctaButton?: {
      __typename: 'ButtonFragment';
      text?: string | null;
      link?: {
        __typename: 'LinkFragment';
        linkType?: string | null;
        externalUrl?: string | null;
        emailAddress?: string | null;
        internalLink?: {
          __typename: 'Page';
          _id?: string | null;
          slug?: { __typename: 'Slug'; current?: string | null } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export const PageContentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageContent' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Document' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'id' },
            name: { kind: 'Name', value: '_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageContentFragment, unknown>;
export const AboutSectionIdentifierFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AboutSectionIdentifier' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AboutSection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'id' },
            name: { kind: 'Name', value: '_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AboutSectionIdentifierFragment, unknown>;
export const GallerySectionIdentifierFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GallerySectionIdentifier' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'GallerySection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'id' },
            name: { kind: 'Name', value: '_key' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GallerySectionIdentifierFragment, unknown>;
export const HeroSectionIdentifierFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HeroSectionIdentifier' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'HeroSection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'id' },
            name: { kind: 'Name', value: '_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroSectionIdentifierFragment, unknown>;
export const IntroSectionIdentifierFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'IntroSectionIdentifier' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'IntroSection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'id' },
            name: { kind: 'Name', value: '_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IntroSectionIdentifierFragment, unknown>;
export const NewsSectionIdentifierFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NewsSectionIdentifier' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'NewsSection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'id' },
            name: { kind: 'Name', value: '_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NewsSectionIdentifierFragment, unknown>;
export const ProgramSectionIdentifierFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProgramSectionIdentifier' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProgramSection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'id' },
            name: { kind: 'Name', value: '_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProgramSectionIdentifierFragment, unknown>;
export const GetLandingPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getLandingPage' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'landingPage' },
            name: { kind: 'Name', value: 'allPage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'landing' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'BooleanValue', value: true },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLandingPageQuery, GetLandingPageQueryVariables>;
export const GetAllPagesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAllPages' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'pages' },
            name: { kind: 'Name', value: 'allPage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'landing' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'parent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'slug' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllPagesQuery, GetAllPagesQueryVariables>;
export const GetSettingsQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSettingsQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'settings' },
            name: { kind: 'Name', value: 'allSiteSettings' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'openGraphTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'openGraphDescription' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'openGraphImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'asset' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fallbackImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'asset' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mainNavigation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mainFooter' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextPage' } },
                { kind: 'Field', name: { kind: 'Name', value: 'previousPage' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSettingsQueryQuery, GetSettingsQueryQueryVariables>;
export const LandingPageQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'LandingPageQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'landingPage' },
            name: { kind: 'Name', value: 'allPage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'landing' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'BooleanValue', value: true },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'content' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PageContent' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageContent' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Document' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'id' },
            name: { kind: 'Name', value: '_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LandingPageQueryQuery, LandingPageQueryQueryVariables>;
export const PageQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'pages' },
            name: { kind: 'Name', value: 'allPage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'slug' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'id' },
                  name: { kind: 'Name', value: '_id' },
                },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'openGraph' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'asset' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'headerVariant' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'content' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PageContent' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'overwrittenMainNavigation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'overwrittenFooter' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageContent' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Document' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'id' },
            name: { kind: 'Name', value: '_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageQueryQuery, PageQueryQueryVariables>;
export const AboutSectionDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AboutSectionData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'data' },
            name: { kind: 'Name', value: 'AboutSection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                { kind: 'Field', name: { kind: 'Name', value: '_key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'asset' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'metadata' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dimensions' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ctaButton' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'link' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'linkType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'internalLink' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'current' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AboutSectionDataQuery, AboutSectionDataQueryVariables>;
export const GallerySectionDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GallerySectionData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'data' },
            name: { kind: 'Name', value: 'Gallery' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                { kind: 'Field', name: { kind: 'Name', value: '_key' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'images' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'asset' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GallerySectionDataQuery, GallerySectionDataQueryVariables>;
export const HeroSectionDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HeroSectionData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'data' },
            name: { kind: 'Name', value: 'HeroSection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                { kind: 'Field', name: { kind: 'Name', value: '_key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enabled' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'backgroundImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'asset' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'metadata' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dimensions' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contentBlocks' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_key' } },
                      { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'richText' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'align' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'maxWidth' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ctaButton' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'link' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'linkType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'internalLink' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'current' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroSectionDataQuery, HeroSectionDataQueryVariables>;
export const IntroSectionDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'IntroSectionData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'data' },
            name: { kind: 'Name', value: 'IntroSection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                { kind: 'Field', name: { kind: 'Name', value: '_key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'blocks' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'IntroTextBlock' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: '_key' } },
                            { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'IntroIconBlock' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: '_key' } },
                            { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'iconType' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cta' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'link' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'linkType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'internalLink' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'current' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'showButton' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enabled' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IntroSectionDataQuery, IntroSectionDataQueryVariables>;
export const NewsSectionDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NewsSectionData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'data' },
            name: { kind: 'Name', value: 'NewsSection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                { kind: 'Field', name: { kind: 'Name', value: '_key' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'enabled' } },
                { kind: 'Field', name: { kind: 'Name', value: 'showButton' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ctaButton' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'link' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'linkType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'internalLink' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'current' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NewsSectionDataQuery, NewsSectionDataQueryVariables>;
export const ProgramSectionDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ProgramSectionData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'data' },
            name: { kind: 'Name', value: 'ProgramSection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_type' } },
                { kind: 'Field', name: { kind: 'Name', value: '_key' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'maxItems' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enabled' } },
                { kind: 'Field', name: { kind: 'Name', value: 'showButton' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ctaButton' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'link' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'linkType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'internalLink' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'current' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProgramSectionDataQuery, ProgramSectionDataQueryVariables>;
