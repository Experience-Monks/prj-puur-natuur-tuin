import type { AnimationType } from '../animation.types';

export const wipeDirections = ['top', 'right', 'bottom', 'left', 'center'] as const;

export type WipeDirection = (typeof wipeDirections)[number];

export type WipeOptions = AnimationType &
  Partial<Pick<gsap.TweenVars, 'clearProps'>> & {
    fromRound?: number;
    toRound?: number;
  };
