import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import Image from 'next/image';
import { type ReactElement } from 'react';
import { useDutchDate } from '../../hooks/useDutchDate';
import { useEnabledAnimation } from '../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../hooks/useEnabledBeforeUnmount';
import Copy, { CopySize } from '../general/copy/Copy';
import Heading, { HeadingSize } from '../general/heading/Heading';
import { createInAnimation, createOutAnimation } from './NewsCard.animations';
import styles from './NewsCard.module.scss';

type NewsCardProps = {
  title: string;
  date: string;
  icon: string;
};

export type NewsCardRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export const NewsCard = ensuredForwardRef<HTMLDivElement, NewsCardProps>(
  ({ title, date, icon }, ref): ReactElement => {
    const refs = useRefs<NewsCardRefs>({
      self: ref,
    });

    // Format the date in Dutch format (day month)
    const formattedDate = useDutchDate(date);

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    return (
      <div className={styles.newsCard} ref={refs.self}>
        <div className={styles.iconBackground}>
          <div className={styles.iconWrapper}>
            <Image
              src={icon}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              className={styles.icon}
            />
          </div>
        </div>

        <div className={styles.content}>
          <Copy size={CopySize.BodyLarge} className={styles.date}>
            {formattedDate}
          </Copy>
          <Heading as="h4" className={styles.title} size={HeadingSize.Heading4}>
            {title}
          </Heading>
        </div>
      </div>
    );
  },
);
