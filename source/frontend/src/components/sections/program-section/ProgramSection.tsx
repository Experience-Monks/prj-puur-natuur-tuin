import { ensuredForwardRef, useRefs } from '@mediamonks/react-kit';
import { type ReactElement } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import { PrimaryButton } from '../../buttons/primary-button/PrimaryButton';
import Heading, { HeadingSize } from '../../general/heading/Heading';
import { ProgramCard } from '../../program-card/ProgramCard';
import { createInAnimation, createOutAnimation } from './ProgramSection.animations';
import styles from './ProgramSection.module.scss';
import { type ProgramSectionProps, type ProgramSectionRefs } from './ProgramSection.types';

export const ProgramSection = ensuredForwardRef<HTMLDivElement, ProgramSectionProps>(
  ({ title, programs, showButton, ctaLabel, ctaUrl }, ref): ReactElement => {
    const refs = useRefs<ProgramSectionRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    return (
      <div className={styles.programSection} ref={refs.self}>
        <Heading as="h2" className={styles.heading} size={HeadingSize.Heading2}>
          {title}
        </Heading>
        <ul className={styles.programList}>
          {programs.map((program) => (
            <li key={program.id} className={styles.programCard}>
              <ProgramCard {...program} />
            </li>
          ))}
        </ul>
        {showButton && ctaLabel && ctaUrl && (
          <div className={styles.ctaWrapper}>
            <PrimaryButton href={ctaUrl}>{ctaLabel}</PrimaryButton>
          </div>
        )}
      </div>
    );
  },
);
