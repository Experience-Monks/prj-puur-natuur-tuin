'use client';

import { useUnmount } from '@mediamonks/react-kit';
import { animations, useAnimation } from '@mediamonks/react-kit/gsap';
import { type RefObject } from 'react';
import { useEnableAnimationsContext } from '../providers/enable-animations-provider/EnableAnimationsProvider';

export function useEnabledAnimation<T extends gsap.core.Animation>(
  callback: () => T | undefined,
  dependencies: ReadonlyArray<unknown>,
  expose?: boolean,
  reference?: RefObject<unknown>,
): ReturnType<typeof useAnimation> {
  const areAnimationsEnabled = useEnableAnimationsContext();

  const animationRef = useAnimation(() => {
    if (reference?.current && expose) {
      animations.delete(reference.current);
    }

    const animation = callback();

    if (!areAnimationsEnabled) {
      animation?.pause(0);
    }

    if (reference?.current && animation && expose) {
      animations.set(reference.current, animation);
    }

    return animation;
  }, [...dependencies, expose ? false : areAnimationsEnabled]);

  useUnmount(() => {
    if (reference?.current && expose) {
      animations.delete(reference.current);
    }
  });

  return animationRef;
}
