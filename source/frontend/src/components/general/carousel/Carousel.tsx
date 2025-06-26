import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import Image from 'next/image';
import { type ReactElement, useCallback, useEffect, useRef } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import { createInAnimation, createOutAnimation } from './Carousel.animations';
import { CarouselRotation } from './Carousel.enum';
import styles from './Carousel.module.scss';

gsap.registerPlugin(Observer);

type CarouselProps = {
  images: Array<string>;
  rotation?: CarouselRotation;
};

export type CarouselRefs = MutableRefs<{
  self: HTMLDivElement;
  container: HTMLDivElement;
}>;

export const Carousel = ensuredForwardRef<HTMLDivElement, CarouselProps>(
  ({ images, rotation = CarouselRotation.None }, ref): ReactElement => {
    const refs = useRefs<CarouselRefs>({
      self: ref,
    });

    const cardsRefs = useRef<Array<HTMLDivElement>>([]);

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    const imagesLength = images.length;
    const duplicatedImages = [...images, ...images, ...images];
    const startIndex = imagesLength;

    cardsRefs.current = [];

    const onCardElementRef = useCallback((element: HTMLDivElement | null) => {
      if (element) {
        cardsRefs.current.push(element);
      }
    }, []);

    useEffect(() => {
      if (typeof window === 'undefined') {
        return;
      }
      const container = refs.container.current;
      const cards = cardsRefs.current;

      if (!container || cards.length === 0) {
        return;
      }

      const card = cards[startIndex];
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      const offset = viewportWidth / 2 - cardRect.width / 2 - (cardRect.left - containerRect.left);

      gsap.set(container, { x: offset });
      let total = offset;

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
        onRelease: () => rotateTo(0),
        onStop: () => rotateTo(0),
      });

      return () => {
        observer.kill();
      };
    }, [images, refs.container, cardsRefs, startIndex]);

    return (
      <div
        className={clsx(
          styles.carousel,
          rotation === CarouselRotation.Clockwise && styles.clockwise,
          rotation === CarouselRotation.CounterClockwise && styles.counterClockwise,
        )}
        ref={refs.self}
        style={{ opacity: 0 }}
      >
        <div className={styles.container} ref={refs.container}>
          {duplicatedImages.map((image, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`${image}-${index}`}
              className={styles.card}
              ref={onCardElementRef}
            >
              <Image src={image} alt={`Slide ${index + 1}`} width={1200} height={1200} />
            </div>
          ))}
        </div>
      </div>
    );
  },
);
