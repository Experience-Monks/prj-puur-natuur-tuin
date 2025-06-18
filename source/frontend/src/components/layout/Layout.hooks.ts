import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { fadeFromTo } from '../../animation/fade/fade';
import { isPreloadedState } from '../../stores/app.store';
import { type LayoutRefs } from './Layout';

export function useLayoutInit(): {
  isPreloaded: boolean;
  isWebGlInitComplete: boolean;
  onPreloadComplete(): void;
  onWebGlInitComplete(): void;
} {
  const [isPreloaded, setIsPreloaded] = useRecoilState(isPreloadedState);
  const [isWebGlInitComplete, setIsWebGlInitComplete] = useState(false);

  const onPreloadComplete = useCallback(() => {
    setIsPreloaded(true);
  }, [setIsPreloaded]);

  const onWebGlInitComplete = useCallback(() => {
    setIsWebGlInitComplete(true);
  }, [setIsWebGlInitComplete]);

  return {
    isPreloaded,
    isWebGlInitComplete,
    onPreloadComplete,
    onWebGlInitComplete,
  };
}

export function useSetVisibility(refs: LayoutRefs): void {
  useEffect(() => {
    if (refs.self.current) {
      fadeFromTo(refs.self.current, { duration: 0.01 });
    }
  }, [refs]);
}
