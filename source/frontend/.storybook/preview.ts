import i18nConfig from '../i18n.config';
import '../src/styles/screen.scss';
import i18n, { withI18next } from './i18next';

export const decorators = [withI18next];

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F8F6F2',
      },
      {
        name: 'dark',
        value: '#092626',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  i18n,
  locale: i18nConfig.defaultLocale,
  locales: i18nConfig.locales.reduce((result, locale) => {
    result[locale] = locale;
    return result;
  }, {}),
};

// Create a global variable called locale in storybook
// and add a menu in the toolbar to change your locale
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        ...i18nConfig.locales.map((locale) => ({ value: locale, title: locale })),
        { value: 'debug', title: 'Debug' },
      ],
    },
  },
};
export const tags = ['autodocs'];
