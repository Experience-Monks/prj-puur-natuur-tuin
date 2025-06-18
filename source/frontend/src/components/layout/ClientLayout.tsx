'use client';

import { type ReactElement } from 'react';
import { WebVitals } from '../utils/WebVitals/WebVitals';

type ClientLayoutProps = {
  children: ReactElement;
};

export function ClientLayout({ children }: ClientLayoutProps): ReactElement {
  return (
    <html lang="nl">
      <body suppressHydrationWarning style={{ margin: 0 }}>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
