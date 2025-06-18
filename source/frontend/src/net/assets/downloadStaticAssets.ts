import fs from 'node:fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import nodeFetch from 'node-fetch';
import { type AssetMap } from './createStaticAssetMap';

const temporaryStaticAssets = process.env.TEMPORARY_STATIC_ASSETS_DIR ?? '';

/**
 * Helper method to download the assets from the asset map and store them in a temporary local folder that will be
 * added to the final build.
 *
 * @param assetMap
 */
export async function downloadStaticAssets(assetMap: AssetMap): Promise<void> {
  for (const { input, output } of assetMap.values()) {
    const partialOutputPath = `${temporaryStaticAssets}${output.split('/').slice(0, -1).join('/')}`;
    const fullOutputPath = `${temporaryStaticAssets}${output}`;

    // Make sure we only download files we do not already have locally.
    if (!fs.existsSync(fullOutputPath)) {
      // eslint-disable-next-line no-await-in-loop
      const result = await nodeFetch(input);

      // Create folder if it doesn't exist
      if (!fs.existsSync(partialOutputPath)) {
        fs.mkdirSync(partialOutputPath, { recursive: true });
      }

      const fileStream = fs.createWriteStream(fullOutputPath);

      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve, reject) => {
        result.body?.pipe(fileStream);
        result.body?.on('error', reject);
        fileStream.on('finish', resolve);
      });
    }
  }
}
