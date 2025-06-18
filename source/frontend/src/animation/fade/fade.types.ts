import { type AnimationType } from '../animation.types';

export type FadeOptions = AnimationType & {
  from?: number;
  to: number;
  autoAlpha: boolean;
  clearProps: boolean;
};
