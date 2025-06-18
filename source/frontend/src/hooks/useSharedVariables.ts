import sharedVariables from '../data/shared-variables/shared-variables.internal.json';

export function useSharedVariables(): Readonly<typeof sharedVariables> {
  return sharedVariables;
}
