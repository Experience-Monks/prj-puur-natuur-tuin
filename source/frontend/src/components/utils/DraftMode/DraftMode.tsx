/* eslint-disable react/jsx-no-literals */
'use client';

import { type ReactElement } from 'react';
import styles from './DraftMode.module.scss';

export function DraftMode(): ReactElement {
  return (
    <div className={styles.draftMode}>
      <p>Draft Mode Enabled</p>
      <a href="/api/draft-mode/disable">Disable</a>
    </div>
  );
}
