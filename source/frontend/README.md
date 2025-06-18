# Media.Monks Next.js Skeleton

## Features

- [Next.js](https://nextjs.org/)
- Fully [Typescript](https://www.typescriptlang.org/)
- I18n using [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/)
- Static exports
- Localisation for static exports
- [CSS modules](https://github.com/css-modules/css-modules)
- [SCSS](https://sass-lang.com/)
- [scss-utils](https://github.com/mediamonks/scss-utils) mixins and helpers
- [@mediamonks/react-kit](https://github.com/mediamonks/react-hooks) Collection of commonly used
  hooks, components, utilities
- [normalize.css](https://github.com/necolas/normalize.css/)
- [Plop](https://plopjs.com/) templates for fast component and page generation
- Zero config HTTPS development server
- [GSAP](https://greensock.com/gsap/) with bonus modules
- Page transitions
- SVG icons using [SVGR](https://react-svgr.com/)
- [lodash-es](https://lodash.com/)
- Peter's SoundManager

## Installation

```bash
git clone git@bitbucket.org:mediamonks/mediamonks-frontend-nextjs-skeleton.git
```

## Setup 🚀

```bash
npm ci
npm run postinstall
```

## Important Scripts

- `npm run dev`: Starts the development server
- `npm run dev:https`: Starts the https development server
- `npm run build`: Creates a build
- `npm run start`: Starts the build on a nodejs server
- `npm run export`: Creates a static export
- `npm run plop`: Creates a component or page

## Security 👮‍

### Ignore scripts

In order to mitigate NPM supply chain attacks by best effort the NPM
[ignore-scripts](https://docs.npmjs.com/cli/v8/commands/npm-install#ignore-scripts) setting is
enabled by default. This project comes with a preconfigured set of dependencies that are allowed to
run installation scripts.

After running `npm install` it is required to run `npm run postinstall` to run required installation
scripts from dependent packages.

When adding a new dependency that requires an installation script to run make sure to add that
package to the project `package.json` in the `postinstall` property.

> Important: After running `npm install` or `npm ci` always run `npm run postinstall` afterwards
> before running other scripts.
>
> Note: The Media.Monks Deploytool works out of the box with this setup

### CSP Configuration

The skeleton comes by default with a restricted Content Security Policy (CSP). The CSP header can be
configured within `csp.config.js`. The CSP is enabled during development and is added as a meta tag
during export.

When hosted by Media.Monks or having the ability to adjust response headers the CSP header should be
set there. If the CSP header is returned from the response headers it is safe to remove the CSP meta
tag from the `HeadSection.tsx` file.

More information about CSP headers can be found on the
[wiki](https://wiki.monks.tools/Content_Security_Policy).

## Standards 📒

This project follows the
[MediaMonks Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards)

## Support

Any questions around the skeleton? Feel free to drop them in the Media.Monks
[#nextjs](https://mediamonks.slack.com/archives/C03R0LYTR6F) or
[#frontend](https://mediamonks.slack.com/archives/CFTUZCEEA) slack channels!

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
