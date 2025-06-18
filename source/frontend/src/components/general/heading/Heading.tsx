import { ensuredForwardRef } from '@mediamonks/react-kit';
import classNames from 'clsx';
import { type HTMLAttributes, type ReactNode } from 'react';
import styles from './Heading.module.scss';

export enum HeadingSize {
  Heading1 = 'sizeHeading1',
  Heading2 = 'sizeHeading2',
  Heading3 = 'sizeHeading3',
  Heading4 = 'sizeHeading4',
}

export type HeadingProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'children'> & {
  children: string | ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: HeadingSize;
};

const Heading = ensuredForwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      as: Tag = 'h2',
      size = HeadingSize.Heading2,
      children,
      ...otherProps
    },
    elementRef,
  ) => (
    <Tag
      className={classNames(className, styles.heading, styles[size])}
      ref={elementRef}
      {...otherProps}
    >
      {children}
    </Tag>
  ),
);

export default Heading;
