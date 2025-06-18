import { validateAndUnwrapRefs } from '@mediamonks/react-kit';
import gsap from 'gsap';
import { fadeFromTo } from '../../../animation/fade/fade';
import { type SitePreloaderRefs } from './SitePreloader';

export function createInAnimation(refs: SitePreloaderRefs): gsap.core.Animation {
  const [isValid, unwrappedRefs] = validateAndUnwrapRefs(refs);

  const timeline = gsap.timeline({ paused: true });

  if (!isValid) {
    return timeline;
  }

  timeline.add(fadeFromTo(unwrappedRefs.self, { duration: 0.1 }));

  return timeline;
}
