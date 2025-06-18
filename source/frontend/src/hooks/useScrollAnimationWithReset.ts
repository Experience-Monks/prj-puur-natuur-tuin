import { useScrollAnimation } from '@mediamonks/react-kit/gsap';
import gsap from 'gsap';
import { type RefObject } from 'react';

/**
 * useScrollAnimationWithReset - A custom React hook that triggers a GSAP animation reset
 * when the specified element is scrolled out of the viewport at the top.
 *
 * This hook utilizes GSAP's ScrollTrigger to monitor the position of the provided
 * `resetElement`. When the element leaves the viewport from the top, it pauses the
 * associated scroll animation and moved the timeline back to the beginning,
 * meaning the animation will play again when back in viewport.
 *
 * This is very useful when you have an animation that starts to play when an element
 * has a start trigger inside the viewport. So something like: `start: 'top 75%`.
 * If you were to reset that in this ScrollTrigger it would happen when the component is still in view.
 *
 */
export function useScrollAnimationWithReset<T extends gsap.core.Animation>(
  resetElement: RefObject<Element>,
  callback: () => T | undefined,
  dependencies: ReadonlyArray<unknown>,
): void {
  const scrollAnimationRef = useScrollAnimation(callback, dependencies);

  useScrollAnimation(
    () =>
      gsap.timeline({
        scrollTrigger: {
          trigger: resetElement.current,
          start: 'top bottom',
          onLeaveBack: () => {
            scrollAnimationRef.current?.pause(0);
          },
        },
      }),
    [scrollAnimationRef, resetElement],
  );
}
