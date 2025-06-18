import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Media.Monks',
    brandUrl: 'https://media.monks.com/',
    brandImage: './mm-theme-brand-logo.png',
  }),
});
