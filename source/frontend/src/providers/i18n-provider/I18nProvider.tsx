'use client';

import i18next, { type ResourceLanguage } from 'i18next';
import { type PropsWithChildren, type ReactElement, useEffect, useMemo, useRef } from 'react';
import { I18nextProvider } from 'react-i18next';
import { LocaleProvider } from '../locale-provider/LocaleProvider';

type I18nProviderProps = {
  translation: ResourceLanguage;
  locale: string;
  locales: Array<string>;
};

export function I18nProvider({
  translation,
  locale,
  locales,
  children,
}: PropsWithChildren<I18nProviderProps>): ReactElement {
  const isFirstMount = useRef(true);

  // useMemo is used below because the translations need to be available on first render to support SSR and SSG.
  useMemo(() => {
    i18next.init({
      lng: locale,
      resources: {
        [locale]: {
          ...translation,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    i18next.changeLanguage(locale);

    for (const key of Object.keys(translation)) {
      i18next.addResourceBundle(locale, key, translation[key]);
    }
  }, [locale, translation]);

  return (
    <I18nextProvider i18n={i18next}>
      <LocaleProvider locale={locale} locales={locales}>
        {children}
      </LocaleProvider>
    </I18nextProvider>
  );
}
