import { ensuredForwardRef, useBeforeUnmount, useMount, useRefs } from '@mediamonks/react-kit';
import { type MutableRefs } from '@mediamonks/react-kit';
import { useAnimation } from '@mediamonks/react-kit/gsap';
import { type PropsWithChildren, type ReactElement } from 'react';
import { createInAnimation, createOutAnimation } from './PageTransition.animations';
import styles from './PageTransition.module.scss';

export type PageTransitionRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export const PageTransition = ensuredForwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref): ReactElement => {
    const refs = useRefs<PageTransitionRefs>({
      self: ref,
    });

    useAnimation(() => createInAnimation(refs), [refs]);
    useBeforeUnmount(async () => createOutAnimation(refs));

    useMount(() => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      }
    });

    return (
      <div ref={refs.self} className={styles.page}>
        {children}
      </div>
    );
  },
);

PageTransition.displayName = 'PageTransition';
