'use client';

import { TransitionPresence } from '@mediamonks/react-kit';
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
        <TransitionPresence>
          {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
          <>{children}</>
        </TransitionPresence>
      </body>
    </html>
  );
}
