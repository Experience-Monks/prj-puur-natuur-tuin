import { type PropsWithChildren, type ReactElement } from 'react';
import styles from './ComponentRenderer.fallback.module.scss';

export function ComponentRendererFallback({
  title = '⚠️ Warning',
  children,
  ...restProps
}: PropsWithChildren<{ title?: string }>): ReactElement {
  return (
    <div {...restProps} className={styles.fallback}>
      <h5>{title}</h5>
      <p>{children}</p>
    </div>
  );
}
