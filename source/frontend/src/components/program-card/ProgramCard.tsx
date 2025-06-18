import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import Image from 'next/image';
import { type ReactElement } from 'react';
import { useEnabledAnimation } from '../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../hooks/useEnabledBeforeUnmount';
import Copy, { CopySize } from '../general/copy/Copy';
import Heading, { HeadingSize } from '../general/heading/Heading';
import { createInAnimation, createOutAnimation } from './ProgramCard.animations';
import styles from './ProgramCard.module.scss';

type ProgramCardProps = {
  title: string;
  date: string;
  month: string;
  time: string;
  image: string;
  description: string;
};

export type ProgramCardRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export const ProgramCard = ensuredForwardRef<HTMLDivElement, ProgramCardProps>(
  ({ title, date, month, time, image, description }, ref): ReactElement => {
    const refs = useRefs<ProgramCardRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    return (
      <div className={styles.programCard} ref={refs.self}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={title} fill className={styles.image} />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.dateTimeWrapper}>
            <div className={styles.dateContainer}>
              <Copy as="span" size={CopySize.Caption} className={styles.dayNumber}>
                {date}
              </Copy>
            </div>
            <div className={styles.monthContainer}>
              <Copy as="span" size={CopySize.Caption} className={styles.monthText}>
                {month}
              </Copy>
            </div>
            <div className={styles.timeContainer}>
              <Copy as="span" size={CopySize.Caption} className={styles.timeText}>
                {time}
              </Copy>
            </div>
          </div>
          <Heading as="h3" size={HeadingSize.Heading3} className={styles.title}>
            {title}
          </Heading>
          <Copy size={CopySize.BodyLarge} className={styles.description}>
            {description}
          </Copy>
        </div>
      </div>
    );
  },
);
