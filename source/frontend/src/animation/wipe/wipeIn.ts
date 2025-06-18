import gsap from 'gsap';
import { defaultWipeInOptions, defaultWipeOutOptions } from './wipe.config';
import { type WipeDirection, type WipeOptions } from './wipe.types';

export function wipeIn(
  element: Element | HTMLElement | Array<HTMLElement> | Array<Element>,
  direction: WipeDirection,
  options: Partial<WipeOptions> = {},
): gsap.core.Animation {
  const { fromRound, toRound, ...tweenOptions } = { ...defaultWipeInOptions, ...options };

  const [top, right, bottom, left] = getInset(direction);

  return gsap.fromTo(
    element,
    {
      clipPath: `inset(${top} ${right} ${bottom} ${left}${
        fromRound === undefined ? '' : ` round ${fromRound}`
      })`,
    },
    {
      ...tweenOptions,
      clipPath: `inset(0% 0% 0% 0%${toRound === undefined ? '' : ` round ${toRound}`})`,
    },
  );
}

export function wipeOut(
  element: Element | HTMLElement | Array<HTMLElement> | Array<Element>,
  direction: WipeDirection,
  options: Partial<WipeOptions> = {},
): gsap.core.Animation {
  const { toRound, ...tweenOptions } = { ...defaultWipeOutOptions, ...options };

  const [top, right, bottom, left] = getInset(direction);

  return gsap.to(element, {
    ...tweenOptions,
    clipPath: `inset(${top} ${right} ${bottom} ${left}${
      toRound === undefined ? '' : ` round ${toRound}`
    })`,
  });
}

function getInset(direction: WipeDirection): [string, string, string, string] {
  if (direction === 'center') {
    return ['50%', '50%', '50%', '50%'];
  }

  return [
    // Top
    direction === 'bottom' ? '100%' : '0%',

    // Right
    direction === 'left' ? '100%' : '0%',

    // Bottom
    direction === 'top' ? '100%' : '0%',

    // Left
    direction === 'right' ? '100%' : '0%',
  ];
}
