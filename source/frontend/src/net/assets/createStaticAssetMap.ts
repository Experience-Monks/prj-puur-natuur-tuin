import { type ApolloQueryResult } from '@apollo/client';

export type AssetMap = Map<string, { input: string; output: string }>;

// Global set of images we want to convert to the desired image extension.
const imageExtensionsToConvert = new Set([
  'webp',
  'png',
  'jpg',
  'jpeg',
  'jfif',
  'pjpeg',
  'pjp',
  'avif',
  'apng',
  'bmp',
  'tif',
  'tiff',
]);

const imageTargetExtension = 'webp';

/**
 * Helper method to extract the static assets from the Apollo query and creates a Map so we can store them
 * locally for the build.
 *
 * @param data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createStaticAssetMap(data: ApolloQueryResult<any>['data']): AssetMap {
  const map: AssetMap = new Map();

  const regex = new RegExp(`${process.env.ASSET_CDN_BASE}/[^"+]+`, 'gu');
  const matches = JSON.stringify(data).match(regex) ?? [];

  for (const match of matches) {
    const extension = match.split('.').at(-1) ?? '';
    const { searchParams } = new URL(match);

    // eslint-disable-next-line unicorn/no-unreadable-array-destructuring
    const [, , , folderName = '', , , fileName = ''] = match.split('/');
    const matchRequiresConversion = imageExtensionsToConvert.has(extension);
    const targetExtension = matchRequiresConversion ? imageTargetExtension : extension;

    if (matchRequiresConversion) {
      searchParams.append('fm', targetExtension);
      searchParams.append('max-w', '2880');
      searchParams.append('max-h', '1620');
    }

    map.set(match, {
      input: `${match}?${searchParams.toString()}`,
      output: `${process.env.ASSET_STATIC_BASE}/${folderName}/${fileName.replace(extension, targetExtension)}`,
    });
  }

  return map;
}
