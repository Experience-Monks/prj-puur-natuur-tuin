import { merge } from 'lodash-es';
import sharedVariables from '../data/shared-variables/shared-variables.internal.json';

export const modifiedVariables = merge({}, sharedVariables, {
  mediaQueries: Object.fromEntries(
    Object.entries(sharedVariables.mediaQueries).map(([key, value]) => [
      key,
      // We need to strip out the excessive quote from the media query in order for it
      // to work with the `useMediaQuery` hook.
      value.replaceAll(`'`, ''),
    ]),
  ),
}) as typeof sharedVariables;

export function getSharedVariables(): Readonly<typeof sharedVariables> {
  return modifiedVariables;
}
