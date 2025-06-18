import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import { type ReactElement } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import { createInAnimation, createOutAnimation } from './Carousel.animations';
import styles from './Carousel.module.scss';

type CarouselProps = {
  images: Array<string>;
};

export type CarouselRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export const Carousel = ensuredForwardRef<HTMLDivElement, CarouselProps>(
  ({ images }, ref): ReactElement => {
    const refs = useRefs<CarouselRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    return (
      <div className={styles.carousel} ref={refs.self}>
        {images.map((image) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={image} src={image} alt="" />
        ))}
      </div>
    );
  },
);
