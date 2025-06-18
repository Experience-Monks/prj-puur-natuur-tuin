import { ensuredForwardRef } from '@mediamonks/react-kit';
import classNames from 'clsx';
import Link, { type LinkProps } from 'next/link';
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
  type ReactElement,
  type RefObject,
} from 'react';
import styles from './Button.module.scss';

export type ButtonProps =
  | ({
      href?: never;
      target?: never;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      type?: never;
    } & AnchorHTMLAttributes<HTMLAnchorElement> &
      LinkProps);

const Button = ensuredForwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PropsWithChildren<ButtonProps>
>(({ href, className, children, ...otherProps }, ref): ReactElement => {
  const classes = classNames(styles.button, className);

  if (href) {
    return (
      <Link
        {...(otherProps as AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps)}
        href={href}
        ref={ref as RefObject<HTMLAnchorElement>}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      {...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
      ref={ref as RefObject<HTMLButtonElement>}
    >
      {children}
    </button>
  );
});

export default Button;
