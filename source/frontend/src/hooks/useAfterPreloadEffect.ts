import { noop } from 'lodash-es';
import { type DependencyList, type EffectCallback, useEffect, useRef } from 'react';
import { useIsPreloaded } from './useIsPreloaded';

export function useAfterPreloadEffect(effect: EffectCallback, deps: DependencyList = []): void {
  const isPreloaded = useIsPreloaded();
  const callbackRef = useRef<EffectCallback>();

  useEffect(() => {
    callbackRef.current = effect;
  }, [effect]);

  useEffect(() => {
    if (!isPreloaded || !callbackRef.current) {
      return noop;
    }

    return callbackRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPreloaded, ...deps]);
}
