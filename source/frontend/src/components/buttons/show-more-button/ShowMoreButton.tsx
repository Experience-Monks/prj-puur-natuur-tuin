import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import classNames from 'clsx';
import { type ReactElement } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import Button from '../button/Button';
import { createInAnimation, createOutAnimation } from './ShowMoreButton.animations';
import { ShowMoreButtonVariants } from './ShowMoreButton.enums';
import styles from './ShowMoreButton.module.scss';
import type { ShowMoreButtonProps } from './ShowMoreButton.types';

export type ShowMoreButtonRefs = MutableRefs<{
  self: HTMLButtonElement | HTMLAnchorElement;
}>;

export const ShowMoreButton = ensuredForwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ShowMoreButtonProps
>(
  (
    { label, href, variant = ShowMoreButtonVariants.About, className, ...props },
    ref,
  ): ReactElement => {
    const refs = useRefs<ShowMoreButtonRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    return (
      <Button
        className={classNames(styles.showMoreButton, className, styles[variant])}
        ref={refs.self}
        {...props}
        href={href}
      >
        {label ?? 'Meer'}
      </Button>
    );
  },
);
