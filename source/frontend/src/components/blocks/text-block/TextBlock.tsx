'use client';

import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import clsx from 'clsx';
import { type ReactElement } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import Copy, { CopySize } from '../../general/copy/Copy';
import { createInAnimation, createOutAnimation } from './TextBlock.animations';
import styles from './TextBlock.module.scss';

type TextBlockProps = {
  text: string;
  className?: string;
  variant?: 'default' | 'large' | 'highlight';
  align?: 'left' | 'center' | 'right';
  richText?: boolean;
  maxWidth?: number;
};

export type TextBlockRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export const TextBlock = ensuredForwardRef<HTMLDivElement, TextBlockProps>(
  (
    { text, className, variant = 'default', align = 'left', richText = false, maxWidth },
    ref,
  ): ReactElement => {
    const refs = useRefs<TextBlockRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    const style = maxWidth ? { maxWidth: `${maxWidth}px` } : undefined;

    return (
      <div
        className={clsx(
          styles.textBlock,
          styles[`variant${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
          styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`],
          className,
        )}
        ref={refs.self}
        style={style}
      >
        <Copy
          size={variant === 'large' ? CopySize.BodyLarge : CopySize.Body}
          className={styles.text}
          richText={richText ? text : undefined}
        >
          {!richText && text}
        </Copy>
      </div>
    );
  },
);
