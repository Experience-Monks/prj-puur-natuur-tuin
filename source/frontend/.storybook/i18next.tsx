import i18n from 'i18next';
import React, { Suspense, useEffect } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18nConfig, { namespaces } from '../i18n.config';

const resources = {};
for (const locale of i18nConfig.locales) {
  for (const namespace of namespaces) {
    if (resources[locale] === undefined) {
      resources[locale] = {};
    }

    // prettier-ignore
    resources[locale][namespace] = require(`../src/translations/${locale}/${namespace}.json?internal`);
  }
}

i18n.use(initReactI18next).init({
  lng: i18nConfig.defaultLocale,
  supportedLngs: i18nConfig.locales,
  ns: namespaces,
  resources,
});

export function withI18next(Story, context) {
  const { locale = i18nConfig.defaultLocale } = context.globals;

  // When the locale global changes
  // Set the new locale in i18n
  useEffect(() => {
    i18n.changeLanguage(locale ?? i18nConfig.defaultLocale);
  }, [locale]);

  return (
    // This catches the suspense from components not yet ready (still loading translations)
    // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
}

export default i18n;
