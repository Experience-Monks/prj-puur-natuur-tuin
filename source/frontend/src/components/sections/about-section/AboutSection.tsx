import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import Image from 'next/image';
import { type ReactElement } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import { PrimaryButton } from '../../buttons/primary-button/PrimaryButton';
import Copy, { CopySize } from '../../general/copy/Copy';
import Heading from '../../general/heading/Heading';
import { createInAnimation, createOutAnimation } from './AboutSection.animations';
import styles from './AboutSection.module.scss';

type AboutSectionProps = {
  title?: string;
  content?: string;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  ctaLabel?: string;
  ctaUrl?: string;
};

export type AboutSectionRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export const AboutSection = ensuredForwardRef<HTMLDivElement, AboutSectionProps>(
  ({ title, content, image, ctaLabel, ctaUrl }, ref): ReactElement => {
    const refs = useRefs<AboutSectionRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    return (
      <section className={styles.aboutSection} ref={refs.self}>
        <div className={styles.container}>
          {image?.url && (
            <div className={styles.imageWrapper}>
              <Image
                src={image.url}
                alt={image.alt ?? title ?? 'About us image'}
                width={image.width ?? 1200}
                height={image.height ?? 1200}
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.contentWrapper}>
            {title && (
              <Heading as="h2" className={styles.title}>
                {title}
              </Heading>
            )}
            {content && (
              <Copy size={CopySize.BodyExtraLarge} className={styles.content}>
                {content}
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
