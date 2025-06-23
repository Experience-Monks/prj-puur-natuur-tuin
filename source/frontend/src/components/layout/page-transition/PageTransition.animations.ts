import { validateAndUnwrapRefs } from '@mediamonks/react-kit';
import { fadeFromTo, fadeTo } from '../../../animation/fade/fade';
import type { PageTransitionRefs } from './PageTransition';

export function createInAnimation(refs: PageTransitionRefs): gsap.core.Animation | undefined {
  const [isValid, validatedRefs] = validateAndUnwrapRefs(refs);

  if (!isValid || !refs.self.current) {
    return;
  }

  const { self } = validatedRefs;

  return fadeFromTo(self, { clearProps: false, duration: 0.1 });
}

export function createOutAnimation(refs: PageTransitionRefs): gsap.core.Animation | undefined {
  const [isValid, validatedRefs] = validateAndUnwrapRefs(refs);

  if (!isValid) {
    return;
  }

  const { self } = validatedRefs;

  return fadeTo(self, { duration: 0.1 });
}
