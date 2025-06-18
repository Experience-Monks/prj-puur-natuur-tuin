/* eslint-disable react-hooks/rules-of-hooks,react/jsx-handler-names */
import { type ReactElement, useCallback, useRef, useState } from 'react';
import { useUpdateEffect } from 'react-use';
import { fadeFromTo, fadeTo } from './fade';

export default {
  title: 'Fade animations',
};

export const Default = {
  render(): ReactElement {
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
        fadeFromTo(animateRef.current, { duration: 1 });
      } else {
        fadeTo(animateRef.current);
      }
    }, [isVisible]);

    return (
      <>
        <nav>
          <button type="button" onClick={show}>
            Fade In
          </button>
          <button type="button" onClick={hide}>
            Fade Out
          </button>
        </nav>
        <div
          ref={animateRef}
          style={{ aspectRatio: '1 / 1', background: 'red', width: `33.333vmin`, margin: '2% 0' }}
        />
      </>
    );
  },
};
