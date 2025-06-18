import eases from '../eases';
import { type WipeOptions } from './wipe.types';

export const defaultWipeInOptions: WipeOptions = {
  duration: 1,
  ease: eases.jorisInOut,
  clearProps: 'clipPath',
};

export const defaultWipeOutOptions: WipeOptions = {
  duration: 1,
  ease: 'power2.in',
};
