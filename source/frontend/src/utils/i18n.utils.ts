import { type ResourceLanguage } from 'i18next';

type Options = {
  locale: string;
  files: Array<string>;
};

// eslint-disable-next-line unicorn/prefer-module
const localeContext = require.context('../translations/?internal', true, /\.json$/u);

export function getTranslation(options: Options): ResourceLanguage {
  const { locale, files } = options;

  const data: ResourceLanguage = {};
  for (const file of files) {
    data[file] = localeContext(`./${locale}/${file}.json`);
  }

  return data;
}

export function getLocaleProps(
  locale: string | undefined,
  locales: Array<string> | undefined,
  namespaces: Array<string> = ['general'],
): {
  locale: string | undefined;
  locales: Array<string> | undefined;
  translation: ResourceLanguage;
} {
  const translation = locale
    ? getTranslation({
        locale,
        files: [...namespaces],
      })
    : {};

  return {
    locale,
    locales,
    translation,
  };
}
