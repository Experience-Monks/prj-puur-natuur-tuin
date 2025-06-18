import { ensuredForwardRef } from '@mediamonks/react-kit';
import classNames from 'clsx';
import { type HTMLAttributes, type RefObject } from 'react';
import styles from './Copy.module.scss';

export enum CopySize {
  Body = 'sizeBody',
  BodyLarge = 'sizeBodyLarge',
  BodyExtraLarge = 'sizeBodyExtraLarge',
  Caption = 'sizeCaption',
}

type CopyProps = HTMLAttributes<HTMLDivElement> & {
  richText?: string;
  as?: 'p' | 'span';
  size?: CopySize;
};

const Copy = ensuredForwardRef<HTMLDivElement | HTMLParagraphElement | HTMLSpanElement, CopyProps>(
  (
    {
      richText,
      children,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      as: Tag = 'p',
      size = CopySize.Body,
      className,
      ...otherProps
    },
    elementRef,
  ) =>
    richText ? (
      <div
        className={classNames(className, styles.copy, styles[size])}
        ref={elementRef as RefObject<HTMLDivElement>}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line @typescript-eslint/naming-convention
          __html: richText,
        }}
        {...otherProps}
      />
    ) : (
      <Tag
        className={classNames(className, styles.copy, styles[size])}
        ref={elementRef as RefObject<HTMLParagraphElement>}
        {...otherProps}
      >
        {children}
      </Tag>
    ),
);

export default Copy;
