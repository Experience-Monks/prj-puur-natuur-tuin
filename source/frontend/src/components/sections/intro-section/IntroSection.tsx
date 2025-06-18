import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import { type ReactElement, type ReactNode } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import { PrimaryButton } from '../../buttons/primary-button/PrimaryButton';
import Copy, { CopySize } from '../../general/copy/Copy';
import Heading, { HeadingSize } from '../../general/heading/Heading';
import BeeIcon from '../../icons/bee.svg';
import BigLeafIcon from '../../icons/big-leaf.svg';
import CarrotIcon from '../../icons/carrot.svg';
import FlowerIcon from '../../icons/flower.svg';
import LeafIcon from '../../icons/leaf.svg';
import PersonEatingIcon from '../../icons/person-eating.svg';
import PersonPlantIcon from '../../icons/person-plant.svg';
import PersonReadingIcon from '../../icons/person-reading.svg';
import SunIcon from '../../icons/sun.svg';
import { createInAnimation, createOutAnimation } from './IntroSection.animations';
import styles from './IntroSection.module.scss';
import { type IntroBlock, IntroBlockType, IntroIconType } from './IntroSection.types';

const iconComponents = {
  [IntroIconType.Sun]: SunIcon,
  [IntroIconType.Leaf]: LeafIcon,
  [IntroIconType.BigLeaf]: BigLeafIcon,
  [IntroIconType.Bee]: BeeIcon,
  [IntroIconType.Carrot]: CarrotIcon,
  [IntroIconType.Flower]: FlowerIcon,
  [IntroIconType.PersonReading]: PersonReadingIcon,
  [IntroIconType.PersonPlant]: PersonPlantIcon,
  [IntroIconType.PersonEating]: PersonEatingIcon,
};

type IconType = IntroIconType;

type IntroSectionProps = {
  content?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  blocks?: Array<IntroBlock>;
};

export type IntroSectionRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export const IntroSection = ensuredForwardRef<HTMLDivElement, IntroSectionProps>(
  ({ content, subtitle, ctaLabel, ctaUrl, blocks = [] }, ref): ReactElement => {
    const refs = useRefs<IntroSectionRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    // Render an icon based on its type
    const renderIcon = (iconType: IconType, key?: string): ReactNode => {
      const IconComponent = iconComponents[iconType];
      if (!IconComponent) {
        return null;
      }

      const className = styles[`${iconType}Icon`] || styles.icon;

      return <IconComponent key={key} className={className} aria-hidden="true" />;
    };

    const renderText = (text: string, key?: string): ReactNode => (
      <Heading key={key} as="h2" size={HeadingSize.Heading2} className={styles.titleFragment}>
        {text}
      </Heading>
    );

    return (
      <section className={styles.introSection} ref={refs.self}>
        <div className={styles.container}>
          {/* Title with decorative elements */}
          <div className={styles.titleWrapper}>
            <div className={styles.titleContent}>
              {blocks.map((block) => {
                // eslint-disable-next-line no-underscore-dangle
                if (block._type === IntroBlockType.Text && 'text' in block) {
                  // eslint-disable-next-line no-underscore-dangle
                  return renderText(block.text, block._key);
                }
                // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unnecessary-condition
                if (block._type === IntroBlockType.Icon && 'iconType' in block) {
                  // eslint-disable-next-line no-underscore-dangle
                  return renderIcon(block.iconType, block._key);
                }
                return null;
              })}
            </div>
          </div>

          {/* Main content */}
          <div className={styles.contentWrapper}>
            {content && (
              <Copy size={CopySize.BodyLarge} className={styles.content}>
                {content}
              </Copy>
            )}

            {subtitle && (
              <Copy size={CopySize.BodyLarge} className={styles.subtitle}>
                {subtitle}
              </Copy>
            )}

            {ctaLabel && ctaUrl && (
              <div className={styles.ctaWrapper}>
                <PrimaryButton href={ctaUrl}>{ctaLabel}</PrimaryButton>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  },
);
