import { validateAndUnwrapRefs } from '@mediamonks/react-kit';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { fadeFromTo, fadeTo } from '../../../animation/fade/fade';
import { type CarouselRefs } from './Carousel';

// Register the Observer plugin
gsap.registerPlugin(Observer);

export function createInAnimation(refs: CarouselRefs): gsap.core.Animation | undefined {
  const [isValid, validatedRefs] = validateAndUnwrapRefs(refs);
  if (!isValid) {
    return undefined;
  }
  const { self } = validatedRefs;

  const timeline = gsap.timeline();
  timeline.add(fadeFromTo(self, { duration: 0.01 }));

  return timeline;
}

export function createOutAnimation(refs: CarouselRefs): gsap.core.Animation | undefined {
  const [isValid, validatedRefs] = validateAndUnwrapRefs(refs);
  if (!isValid) {
    return undefined;
  }
  const { self } = validatedRefs;

  const timeline = gsap.timeline();
  timeline.add(fadeTo(self, { duration: 0.01 }));

  return timeline;
}

export function initializeCarousel(refs: CarouselRefs): (() => void) | undefined {
  const [isValid, validatedRefs] = validateAndUnwrapRefs(refs);
  if (!isValid) {
    return undefined;
  }

  const { container } = validatedRefs;
  if (!container) {
    return gsap.timeline;
  }

  const cards = container.querySelectorAll('.card');
  const half = container.clientWidth / 2;

  const wrap = gsap.utils.wrap(-half, 0);
  const xTo = gsap.quickTo(container, 'x', {
    duration: 0.5,
    ease: 'power3',
    modifiers: {
      x: gsap.utils.unitize(wrap),
    },
  });

  const rotateTo = gsap.quickTo(cards, 'rotation', {
    duration: 1,
    ease: 'power3',
  });

  let total = 0;

  const observer = Observer.create({
    target: container,
    type: 'touch,pointer',
    onDrag: (self) => {
      total += self.deltaX;
      xTo(total);

      const screenWidth = window.innerWidth;
      const normalizedDelta = (self.deltaX / screenWidth) * 100;
      rotateTo(-normalizedDelta);
    },
    onRelease: () => {
      rotateTo(0);
    },
    onStop: () => {
      rotateTo(0);
    },
  });

  return () => {
    observer.kill();
  };
}
