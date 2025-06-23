'use client';

import clsx from 'clsx';
import { type ReactElement } from 'react';
import { PrimaryButton } from '../../buttons/primary-button/PrimaryButton';
import Heading, { HeadingSize } from '../../general/heading/Heading';
import styles from './HeroSection.module.scss';
import { type HeroSectionProps } from './HeroSection.types';

export function HeroSectionTemplate({
  title,
  subtitle,
  backgroundImage,
  contentBlocks = [],
  showButton,
  ctaLabel,
  ctaUrl,
  className,
  variant = 'default',
  refs,
}: HeroSectionProps): ReactElement {
  return (
    <section
      ref={refs.self}
      className={clsx(
        styles.heroSection,
        styles[`variant${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
        className,
      )}
      style={
        backgroundImage?.url
          ? {
              backgroundImage: `url(${backgroundImage.url})`,
            }
          : undefined
      }
    >
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {title && (
            <Heading as="h1" size={HeadingSize.Heading1} className={styles.title}>
              {title}
            </Heading>
          )}

          {subtitle && (
            <Heading as="h2" size={HeadingSize.Heading3} className={styles.subtitle}>
              {subtitle}
            </Heading>
          )}

          {contentBlocks.length > 0 && (
            <div className={styles.contentBlocks}>
              {contentBlocks.map((block, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={`hero-content-block-${index}`}
                  className={styles.contentBlock}
                >
                  {block}
                </div>
              ))}
            </div>
          )}

          {showButton && ctaLabel && ctaUrl && (
            <div className={styles.ctaWrapper}>
              <PrimaryButton href={ctaUrl}>{ctaLabel}</PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
