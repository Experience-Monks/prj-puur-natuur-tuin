import { mergeWith } from 'lodash-es';

/*
 * CSP header configuration
 *
 * Allowing unsafe-inline for next as the build output inlines styles and scripts.
 * Development requires allow unsafe-eval due to restrictions on changing the
 * webpack devtool configuration (ref: https://nextjs.org/docs/messages/improper-devtool).
 *
 * Want to learn more about CSP headers? Read all about it on the wiki https://wiki.monks.tools/Content_Security_Policy
 */

/**
 * When set to false make sure that on the hosted environment the Content-Security-Policy header is sent.
 * The contents of the (formatted) header should be used on that environment.
 * @type {boolean}
 */
export const cspEnabled = true;

/**
 * @type {boolean}
 */
const isDevelopment = process.env.NODE_ENV !== 'production';
const isRiveEnabled = process.env.NEXT_PUBLIC_INCLUDE_RIVE === 'true';

/**
 * The maximum CSP header length for Cloudfront
 * @type {number}
 */
const maxCspHeaderLength = 1784;

/**
 * To split up CSP configuration in readable parts, use the examples from below.
 */
// const twitter = {
//   connect: ['https://syndication.twitter.com'],
//   script: ['https://platform.twitter.com'],
//   frame: ['https://platform.twitter.com'],
// };
//
// const youTube = {
//   img: ['https://i.ytimg.com'],
//   frame: ['https://www.youtube.com'],
//   script: ['https://www.youtube.com'],
// };
//
// const facebook = {
//   img: ['https://www.facebook.com'],
//   script: ['https://connect.facebook.net'],
//   frame: ['https://www.facebook.com'],
// };
//
// const linkedIn = {
//   script: ['https://platform.linkedin.com'],
//   img: ['https://www.linkedin.com'],
// };
//
// const sources = [twitter, youTube, facebook, linkedIn];
const sources = [];

if (isRiveEnabled) {
  const rive = {
    connect: ['data:', 'https://cdn.jsdelivr.net'],
    img: ['blob:'],
    script: [`'wasm-unsafe-eval'`],
  };

  sources.push(rive);
}

/**
 * @typedef {Array<{[index: string]: string}>} CspHeader
 * @type {CspHeader}
 */
const allowed = sources
  // eslint-disable-next-line unicorn/no-array-reduce
  .reduce(
    (cspConfiguration, source) =>
      mergeWith(cspConfiguration, source, (destinationValue, sourceValue) =>
        Array.isArray(destinationValue) ? [...destinationValue, ...sourceValue] : destinationValue,
      ),
    {},
  );

/**
 * Formats the human-readable value to a `Content-Security-Policy` header compatible format.
 * @param {string} header
 * @returns {string}
 */
function formatHeader(header) {
  return header
    .replaceAll('\n', '')
    .replaceAll(' ;', ';')
    .replaceAll(/\s{2,}/gu, ' ')
    .trimStart();
}

/**
 * Formats the directive values
 * @param {string} directive
 * @returns {string}
 */
function formatDirectiveValue(directive) {
  return (directive || []).join(' ');
}

// prettier-ignore
export const cspHeader = formatHeader(`
  default-src 'self';
  style-src 'self' 'unsafe-inline' ${formatDirectiveValue(allowed.style)};
  img-src 'self' data: ${formatDirectiveValue(allowed.img)};
  media-src 'self' ${formatDirectiveValue(allowed.media)};
  font-src 'self' ${formatDirectiveValue(allowed.font)};
  script-src 'self' 'unsafe-inline' ${isDevelopment ? `'unsafe-eval'` : ''} ${formatDirectiveValue(allowed.script)};
  frame-src 'self' ${formatDirectiveValue(allowed.frame)};
  connect-src 'self' ${isDevelopment ? '* ws:' : ''} ${formatDirectiveValue(allowed.connect)};
  manifest-src 'self' ${formatDirectiveValue(allowed.manifest)};
  object-src 'none';
`);

if (cspHeader.length > maxCspHeaderLength) {
  // eslint-disable-next-line no-console
  console.warn(
    `WARNING: CSP Header length exceeds maximum length ${maxCspHeaderLength}. More information about CSP limits https://mnk.li/csp-header-limit`,
  );
}
