import { execSync } from 'node:child_process';
import process from 'node:process';
import { rimraf } from 'rimraf';
import i18n from '../i18n.config.js';

const DIR_OUT = './out';

async function exportLocale(locale, locales, basePath, root) {
  process.env.LOCALE = locale;
  process.env.LOCALES = locales.join(',');
  process.env.BASE_PATH = basePath;
  process.env.NEXT_PUBLIC_BASE_PATH = basePath;
  process.env.NEXT_PUBLIC_ROOT = root;
  process.env.TARGET = 'export';

  // prepare for next build
  await rimraf('.next');

  const defaultString = locale === i18n.defaultLocale ? '(default locale)' : '';

  // build
  // eslint-disable-next-line no-console
  console.log(`${locale}: build ${defaultString}`);
  execSync(`next build`, { stdio: 'inherit' });

  // export
  // eslint-disable-next-line no-console
  console.log(`${locale}: export`);
  execSync(`next export -o ${DIR_OUT}${basePath}`);
}

async function buildAndExport() {
  const { locales, defaultLocale } = i18n;

  const otherLocales = locales.filter((locale) => locale !== defaultLocale);

  // eslint-disable-next-line no-console
  console.log(`Clear old export folder`);
  await rimraf(DIR_OUT);

  // export default locale to root
  let locale = defaultLocale;
  const root = process.env.PUBLIC_PATH ?? '';

  await exportLocale(locale, locales, root, root);

  // export all locales to own export folder
  for (let index = 0, { length } = otherLocales; index < length; index++) {
    locale = otherLocales[index];

    // eslint-disable-next-line no-await-in-loop
    await exportLocale(locale, locales, `${root}/${locale}`, root);
  }

  // eslint-disable-next-line no-console
  console.log(`Finished`);
}

await buildAndExport();
