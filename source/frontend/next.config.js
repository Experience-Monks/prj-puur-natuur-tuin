import path from 'node:path';
import process from 'node:process';
import bundleAnalyzer from '@next/bundle-analyzer';
import jsonImporter from 'node-sass-json-importer';
import { cspEnabled, cspHeader } from './csp.config.js';
import i18n from './i18n.config.js';
import { sharedRules } from './webpack.config.js';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

function getWebpackConfig(config) {
  config.resolve.modules.push(path.resolve('./src'));

  config.module.rules.push(...sharedRules);

  config.resolve.alias = {
    ...config.resolve.alias,
    'mediamonks-webgl': path.resolve('./src/webgl/lib/'),
  };

  // // camel-case style names from css modules
  // for (const { options } of config.module.rules
  //   .find(({ oneOf }) => Boolean(oneOf))
  //   .oneOf.filter(({ use }) => JSON.stringify(use).includes('css-loader'))
  //   // eslint-disable-next-line unicorn/no-array-reduce, unicorn/prefer-spread
  //   .reduce((accumulator, { use }) => accumulator.concat(use), [])) {
  //   if (options.modules) {
  //     options.modules.exportLocalsConvention = 'camelCase';
  //   }
  // }

  return config;
}

const sassOptions = {
  prependData: `@import "src/styles/utils.scss";`,
  importer: jsonImporter(),
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  ...(process.env.TARGET === 'export' ? { basePath: process.env.BASE_PATH } : { i18n }),
  eslint: {
    dirs: ['.'],
  },
  webpack: getWebpackConfig,
  sassOptions,
  poweredByHeader: false,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  output: 'standalone',
  transpilePackages: ['@mediamonks/react-kit', 'gsap'],
  images: {
    domains: ['cdn.sanity.io'],
  },
  // Explicitly set React strict mode for Next.js 15
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'cache-control',
            value: 'public, max-age=1800, s-maxage=1800',
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'cache-control',
            value: 'public, max-age=31536000, s-maxage=31536000',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'cache-control',
            value: 'public, max-age=31536000, s-maxage=31536000',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31556926; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          ...(cspEnabled
            ? [
                {
                  key: 'Content-Security-Policy',
                  value: cspHeader,
                },
              ]
            : []),
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
