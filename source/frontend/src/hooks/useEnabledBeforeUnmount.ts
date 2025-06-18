'use client';

import { type BeforeUnmountCallback, useBeforeUnmount } from '@mediamonks/react-kit';
import { useEnableAnimationsContext } from '../providers/enable-animations-provider/EnableAnimationsProvider';

export function useEnabledBeforeUnmount(callback: BeforeUnmountCallback): void {
  const areTransitionsEnabled = useEnableAnimationsContext();

  useBeforeUnmount((abortSignal: AbortSignal) => {
    if (!areTransitionsEnabled) {
      return;
    }

    return callback(abortSignal);
  });
}
