import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import { type ReactElement } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import Copy, { CopySize } from '../../general/copy/Copy';
import ArrowRightIcon from '../../icons/arrow-right.svg?component';
import Button, { type ButtonProps } from '../button/Button';
import { createInAnimation, createOutAnimation } from './PrimaryButton.animations';
import styles from './PrimaryButton.module.scss';

type PrimaryButtonProps = ButtonProps;

export type PrimaryButtonRefs = MutableRefs<{
  self: HTMLButtonElement;
}>;

export const PrimaryButton = ensuredForwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, ...otherProps }, ref): ReactElement => {
    const refs = useRefs<PrimaryButtonRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    return (
      <Button className={styles.primaryButton} ref={refs.self} {...otherProps}>
        <Copy size={CopySize.BodyLarge} className={styles.content}>
          {children}
          <ArrowRightIcon className={styles.arrow} />
        </Copy>
      </Button>
    );
  },
);
