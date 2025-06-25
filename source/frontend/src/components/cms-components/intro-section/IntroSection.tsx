'use client';

import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import { type ReactElement, useMemo } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import { PrimaryButton } from '../../buttons/primary-button/PrimaryButton';
import Copy, { CopySize } from '../../general/copy/Copy';
import Heading, { HeadingSize } from '../../general/heading/Heading';
import BeeIcon from '../../icons/bee.svg?component';
import BigLeafIcon from '../../icons/big-leaf.svg?component';
import CarrotIcon from '../../icons/carrot.svg?component';
import FlowerIcon from '../../icons/flower.svg?component';
import LeafIcon from '../../icons/leaf.svg?component';
import PersonEatingIcon from '../../icons/person-eating.svg?component';
import PersonPlantIcon from '../../icons/person-plant.svg?component';
import PersonReadingIcon from '../../icons/person-reading.svg?component';
import SunIcon from '../../icons/sun.svg?component';
import { createInAnimation, createOutAnimation } from './IntroSection.animations';
import styles from './IntroSection.module.scss';
import { IntroBlockType, IntroIconType, type IntroSectionProps } from './IntroSection.types';

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

export type IntroSectionRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export const IntroSection = ensuredForwardRef<HTMLDivElement, IntroSectionProps>(
  ({ content, subtitle, link, blocks = [] }, ref): ReactElement => {
    const refs = useRefs<IntroSectionRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    const formattedBlocks = useMemo(
      () =>
        blocks.map((block) => {
          /* eslint-disable no-underscore-dangle */
          if (block._type === IntroBlockType.Text && 'text' in block) {
            return (
              <span
                // eslint-disable-next-line no-underscore-dangle
                key={block._key}
                className={styles.titleFragment}
              >
                {block.text}
              </span>
            );
          }
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (block._type === IntroBlockType.Icon && 'iconType' in block) {
            const IconComponent = iconComponents[block.iconType];
            if (!IconComponent) {
              return null;
            }

            const className = styles[`${block.iconType}Icon`] || styles.icon;

            return <IconComponent key={block._key} className={className} aria-hidden="true" />;
            /* eslint-enable no-underscore-dangle */
          }
          return null;
        }),
      [blocks],
    );

    return (
      <section className={styles.introSection} ref={refs.self}>
        <div className={styles.container}>
          {/* Title with decorative elements */}
          <div className={styles.titleWrapper}>
            <Heading as="h2" size={HeadingSize.Heading2} className={styles.titleContent}>
              {formattedBlocks.map((block) => block)}
            </Heading>
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

            {link && (
              <div className={styles.ctaWrapper}>
                <PrimaryButton {...link}>{link.children}</PrimaryButton>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  },
);
