import type { ApolloQueryResult } from '@apollo/client';
import { type AssetMap } from './createStaticAssetMap';

/**
 * Helper method that takes a graphql response and replaces the remote static assets with a local path so they can be \
 * included in the build.
 *
 * @param data
 * @param assets
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function replaceStaticAssetsInResponse<D = ApolloQueryResult<any>['data']>(
  data: D,
  assets: AssetMap,
): Promise<D> {
  let stringifiedData = JSON.stringify(data);

  for (const [asset, { output }] of assets.entries()) {
    stringifiedData = stringifiedData.replaceAll(asset, output);
  }

  return JSON.parse(stringifiedData);
}
