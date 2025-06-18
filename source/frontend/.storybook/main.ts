import type { StorybookConfig } from '@storybook/nextjs';

const config = {
  staticDirs: ['../public', 'static'],
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
  ],

  framework: '@storybook/nextjs',

  docs: {},

  webpackFinal: async (config) => {
    config.module.rules
      .filter((rule) => typeof rule === 'object' && rule.test?.toString().includes('svg'))
      .forEach((rule) => typeof rule === 'object' && (rule.exclude = /\.svg$/i));

    const sharedWebpackConfig = await import('../webpack.config.js');

    config.module.rules.push(...sharedWebpackConfig.sharedRules);

    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
} as StorybookConfig;

export default config;
