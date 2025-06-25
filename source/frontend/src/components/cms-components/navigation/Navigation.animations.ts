import { validateAndUnwrapRefs } from '@mediamonks/react-kit';
import gsap from 'gsap';
import { fadeFromTo, fadeTo } from '../../../animation/fade/fade';
import { type NavigationRefs } from './Navigation.types';

export interface MobileMenuAnimationOptions {
  duration?: number;
  ease?: string;
  stagger?: number;
}

const defaultMobileMenuOptions: MobileMenuAnimationOptions = {
  duration: 0.1,
  ease: 'power3.inOut',
  stagger: 0.01,
};

export function createMobileMenuOpenAnimation(
  mobileMenuRef: HTMLDivElement | null,
  mobileLinksRef: HTMLDivElement | null,
  options: Partial<MobileMenuAnimationOptions> = {},
): gsap.core.Animation | undefined {
  if (!mobileMenuRef || !mobileLinksRef) {
    return undefined;
  }

  const { duration, ease } = {
    ...defaultMobileMenuOptions,
    ...options,
  };

  const timeline = gsap.timeline({ paused: true });

  timeline.to(mobileMenuRef, { x: '0%', opacity: 1, duration, ease });

  return timeline;
}

export function createInAnimation(refs: NavigationRefs): gsap.core.Animation | undefined {
  const [isValid, validatedRefs] = validateAndUnwrapRefs(refs);
  if (!isValid) {
    return undefined;
  }
  const { self } = validatedRefs;

  const timeline = gsap.timeline();

  timeline.add(fadeFromTo(self, { duration: 0.01 }));
  return timeline;
}

export function createOutAnimation(refs: NavigationRefs): gsap.core.Animation | undefined {
  const [isValid, validatedRefs] = validateAndUnwrapRefs(refs);
  if (!isValid) {
    return undefined;
  }
  const { self } = validatedRefs;

  const timeline = gsap.timeline();

  timeline.add(fadeTo(self, { duration: 0.01 }));
  return timeline;
}
