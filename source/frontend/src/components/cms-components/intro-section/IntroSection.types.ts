import type { CmsLinkProps } from '../../../utils/link.utils';

/**
 * Enum for intro section block types
 */
export enum IntroBlockType {
  Text = 'introTextBlock',
  Icon = 'introIconBlock',
}

/**
 * Enum for icon types
 */
export enum IntroIconType {
  Sun = 'sun',
  Leaf = 'leaf',
  BigLeaf = 'bigLeaf',
  Bee = 'bee',
  Carrot = 'carrot',
  Flower = 'flower',
  PersonReading = 'personReading',
  PersonPlant = 'personPlant',
  PersonEating = 'personEating',
}

/**
 * Type for intro section blocks
 */
export type IntroBlock = {
  _key: string;
  _type: string;
} & (
  | { _type: IntroBlockType.Text; text: string }
  | { _type: IntroBlockType.Icon; iconType: IntroIconType }
);

export type IntroSectionProps = {
  title: string;
  subtitle?: string;
  content?: string;
  link?: CmsLinkProps;
  blocks?: Array<IntroBlock>;
};
