import fs from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * @description Check if npm postinstall script has executed or has valid husky installation
 * @param isDevelopment
 */
export function postInstallCheck(isDevelopment) {
  if (!isDevelopment) {
    return;
  }

  // eslint-disable-next-line no-underscore-dangle
  const __dirname = dirname(fileURLToPath(import.meta.url));

  if (!fs.existsSync(resolve(__dirname, '../../.husky/_/husky.sh'))) {
    throw new Error(`🔴 Cannot start dev server. This error is either caused by
    a) Not executing the post installation step, to fix this run \`npm run postinstall\`. Read more about this step in the
       README.
    b) A faulty husky configuration/installation.
  `);
  }
}
