/* eslint-disable react-hooks/rules-of-hooks,react/jsx-handler-names */
import { type ReactElement, useCallback, useRef, useState } from 'react';
import { useUpdateEffect } from 'react-use';
import { type WipeDirection, wipeDirections, type WipeOptions } from './wipe.types';
import { wipeIn, wipeOut } from './wipeIn';

const roundValues = ['0px', '25px', '50px'];

export default {
  title: 'Wipe animations',
  args: {
    direction: 'top',
    fromRound: '0px',
    toRound: '0px',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: wipeDirections,
    },
    fromRound: {
      control: 'select',
      options: roundValues,
    },
    toRound: {
      control: 'select',
      options: roundValues,
    },
  },
};

type WipeArguments = Pick<WipeOptions, 'fromRound' | 'toRound'> & {
  direction: WipeDirection;
};

export const Default = {
  render({ direction, fromRound, toRound }: WipeArguments): ReactElement {
    const animateRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    const show = useCallback(() => {
      setIsVisible(true);
    }, []);
    const hide = useCallback(() => {
      setIsVisible(false);
    }, []);

    useUpdateEffect(() => {
      if (!animateRef.current) {
        return;
      }
      if (isVisible) {
        wipeIn(animateRef.current, direction, {
          duration: 1,
          fromRound,
          toRound,
          clearProps: toRound ? null : 'clipPath',
        });
      } else {
        wipeOut(animateRef.current, direction, { toRound: fromRound });
      }
    }, [isVisible]);

    return (
      <>
        <nav>
          <button type="button" onClick={show}>
            Wipe In
          </button>
          <button type="button" onClick={hide}>
            Wipe Out
          </button>
        </nav>
        <div
          ref={animateRef}
          style={{ aspectRatio: '1 / 1', background: 'red', width: `50vmin`, margin: '2% 0' }}
        />
      </>
    );
  },
};
