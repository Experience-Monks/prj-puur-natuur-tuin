'use client';

import {
  createContext,
  type PropsWithChildren,
  type ReactElement,
  useContext,
  useMemo,
} from 'react';

type LocaleState = {
  locale: string;
  locales: Array<string>;
};

const LocaleContext = createContext<LocaleState>({ locale: '', locales: [] });

export function useLocaleContext(): LocaleState {
  return useContext(LocaleContext);
}

type LocaleProviderProps = LocaleState;

export function LocaleProvider({
  locale,
  locales,
  children,
}: PropsWithChildren<LocaleProviderProps>): ReactElement {
  const localeState = useMemo(() => ({ locale, locales }), [locale, locales]);

  return <LocaleContext.Provider value={localeState}>{children}</LocaleContext.Provider>;
}
