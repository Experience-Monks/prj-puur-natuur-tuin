/* eslint-disable require-unicode-regexp, prefer-named-capture-group */
export const sharedRules = [
  {
    resourceQuery: /\?raw/,
    type: 'asset/source',
  },
  {
    test: /\.(fs|vs|glsl|txt)$/,
    type: 'asset/source',
  },
  {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          ref: true,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeTitle: false,
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
  {
    test: /\.svg$/i,
    resourceQuery: /svgr/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          ref: true,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeTitle: false,
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
  {
    test: /\.json$/i,
    exclude: /node_modules/,
    type: 'asset/resource',
  },
  {
    test: /\.internal\.json$/,
    exclude: /node_modules/,
    type: 'json',
  },
  {
    test: /\.json$/,
    resourceQuery: /internal/,
    exclude: /node_modules/,
    type: 'json',
  },
  {
    test: /\.wasm$/,
    type: 'asset/resource',
  },
];
