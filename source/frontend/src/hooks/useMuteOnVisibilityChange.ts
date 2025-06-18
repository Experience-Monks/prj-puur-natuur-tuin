import { useEventListener } from '@mediamonks/react-kit';
import { useCallback } from 'react';
import { useChannels } from './useChannels';

export const useMuteOnVisibilityChange = (): void => {
  const channelsInstance = useChannels();

  const onVisibilityChange = useCallback(() => {
    if (document.visibilityState === 'hidden') {
      channelsInstance?.fadeOut(0);
    } else {
      channelsInstance?.fadeIn(0);
    }
  }, [channelsInstance]);

  useEventListener(globalThis.document, 'visibilitychange', onVisibilityChange);
};
