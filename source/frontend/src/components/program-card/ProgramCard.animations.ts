import { validateAndUnwrapRefs } from '@mediamonks/react-kit';
import gsap from 'gsap';
import { fadeFromTo, fadeTo } from '../../animation/fade/fade';
import { type ProgramCardRefs } from './ProgramCard';

export function createInAnimation(refs: ProgramCardRefs): gsap.core.Animation | undefined {
  const [isValid, validatedRefs] = validateAndUnwrapRefs(refs);
  if (!isValid) {
    return undefined;
  }
  const { self } = validatedRefs;

  const timeline = gsap.timeline();

  timeline.add(fadeFromTo(self, { duration: 0.01 }));

  return timeline;
}

export function createOutAnimation(refs: ProgramCardRefs): gsap.core.Animation | undefined {
  const [isValid, validatedRefs] = validateAndUnwrapRefs(refs);
  if (!isValid) {
    return undefined;
  }
  const { self } = validatedRefs;

  const timeline = gsap.timeline();

  timeline.add(fadeTo(self, { duration: 0.01 }));

  return timeline;
}
