import { type FadeOptions } from './fade.types';

export const defaultFadeToOptions: FadeOptions = {
  duration: 0.5,
  to: 0,
  autoAlpha: false,
  clearProps: false,
  delay: 0,
  stagger: 0,
  ease: 'sine.inOut',
};

export const defaultFadeFromToOptions: FadeOptions = {
  ...defaultFadeToOptions,
  from: 0,
  to: 1,
  clearProps: true,
};
