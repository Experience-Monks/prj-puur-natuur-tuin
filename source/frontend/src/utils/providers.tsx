'use client';

import { type PropsWithChildren, type ReactElement } from 'react';
import { I18nProvider } from '../providers/i18n-provider/I18nProvider';

// Default translations - these would typically come from the server
const defaultTranslations = {
  translation: {
    // Add default translations here
  },
};

export function Providers({ children }: PropsWithChildren): ReactElement {
  return (
    <I18nProvider translation={defaultTranslations} locale="nl" locales={['nl']}>
      {children}
    </I18nProvider>
  );
}
