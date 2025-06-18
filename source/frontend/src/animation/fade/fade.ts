import { gsap } from 'gsap';
import { defaultFadeFromToOptions, defaultFadeToOptions } from './fade.config';
import { type FadeOptions } from './fade.types';

export function fadeFromTo(
  element: Element | HTMLElement | Array<HTMLElement> | Array<Element>,
  options: Partial<FadeOptions> = {},
): gsap.core.Tween {
  const { from, to, autoAlpha, clearProps, ...tweenProps } = {
    ...defaultFadeFromToOptions,
    ...options,
  };
  return gsap.fromTo(
    element,
    {
      [autoAlpha ? 'autoAlpha' : 'opacity']: from ?? 0,
      pointerEvents: from === 0 ? 'none' : '',
    },
    {
      ...tweenProps,
      [autoAlpha ? 'autoAlpha' : 'opacity']: to,
      clearProps: clearProps ? 'opacity,visibility,pointerEvents' : 'pointerEvents',
    },
  );
}

export function fadeTo(
  element: Element | HTMLElement | Array<HTMLElement> | Array<Element>,
  options: Partial<FadeOptions> = {},
): gsap.core.Tween {
  const { to, autoAlpha, clearProps, ...tweenProps } = {
    ...defaultFadeToOptions,
    ...options,
  };
  return gsap.to(element, {
    ...tweenProps,
    [autoAlpha ? 'autoAlpha' : 'opacity']: to,
    clearProps: clearProps ? 'opacity,visibility' : '',
  });
}
