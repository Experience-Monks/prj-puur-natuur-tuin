import { ensuredForwardRef } from '@mediamonks/react-kit';
import classNames from 'clsx';
import { type PropsWithChildren, type ReactElement } from 'react';
import Button, { type ButtonProps } from '../button/Button';
import styles from './LinkoutButton.module.scss';

export type LinkoutButtonProps = ButtonProps;

const LinkoutButton = ensuredForwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PropsWithChildren<LinkoutButtonProps>
>(({ className, children, ...otherProps }, ref): ReactElement => {
  const classes = classNames(styles.linkoutButton, className);

  return (
    <Button {...otherProps} className={classes} ref={ref}>
      <span className={styles.content}>
        {children}
        <svg
          className={styles.arrow}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8.57692 0.5L7.42308 1.65385L12.6154 6.84615L0.5 7.42308V8.57692L12.6154 9.15385L7.42308 14.3462L8.57692 15.5L15.5 8.57692V7.42308L8.57692 0.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </Button>
  );
});

export default LinkoutButton;
