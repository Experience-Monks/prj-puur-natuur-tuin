import { useRefValue } from '@mediamonks/react-kit';
import { type RefObject, useEffect, useState } from 'react';

/**
 * Alternative for the `useAnimation` hook, this is used when you create an animation that you expose and you need to
 * watch for updates. The `useAnimation` hook will return a ref and therefore not cause any state updates on
 * parent timelines.
 *
 * @param callback
 * @param dependencies
 */
export function useAnimationState(
  callback: () => gsap.core.Animation,
  dependencies: Array<unknown>,
): RefObject<gsap.core.Animation | undefined> {
  const [animation, setAnimation] = useState<gsap.core.Animation | undefined>();

  useEffect(() => {
    if (animation) {
      animation.kill();
    }
    setAnimation(callback());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return useRefValue(animation);
}
