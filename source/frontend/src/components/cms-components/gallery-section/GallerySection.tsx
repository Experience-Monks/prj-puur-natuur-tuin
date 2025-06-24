'use client';

import { ensuredForwardRef, useRefs } from '@mediamonks/react-kit';
import { type ReactElement } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import { Carousel } from '../../general/carousel/Carousel';
import { createInAnimation, createOutAnimation } from './GallerySection.animations';
import styles from './GallerySection.module.scss';
import { type GallerySectionProps, type GallerySectionRefs } from './GallerySection.types';

export const GallerySection = ensuredForwardRef<HTMLDivElement, GallerySectionProps>(
  ({ images = [] }, ref): ReactElement => {
    const refs = useRefs<GallerySectionRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    // Always render the container div to maintain the ref
    return (
      <div className={styles.gallerySection} ref={refs.self}>
        {images.length > 0 && <Carousel images={images} />}
      </div>
    );
  },
);
