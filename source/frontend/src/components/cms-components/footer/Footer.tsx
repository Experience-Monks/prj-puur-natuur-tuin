'use client';

import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import Link from 'next/link';
import type { ReactElement } from 'react';
import FooterLogo from '../../icons/footer-logo.svg';
import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.types';

export type FooterRefs = MutableRefs<{
  self: HTMLElement;
}>;

export const Footer = ensuredForwardRef<HTMLElement, FooterProps>(
  ({ links = [], copyrightLeft, copyrightRight }, ref): ReactElement => {
    const refs = useRefs<FooterRefs>({
      self: ref,
    });

    return (
      <footer ref={refs.self} className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.linksWrapper}>
            {links.length > 0 &&
              links.map((link, index) => (
                <Link
                  // eslint-disable-next-line react/no-array-index-key
                  key={`footer-link-${index}`}
                  href={link.href}
                >
                  {link.children}
                </Link>
              ))}
          </div>

          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <FooterLogo className={styles.logo} />
            </div>
          </div>

          <div className={styles.brandSection}>
            <p className={styles.copyright}>{copyrightLeft}</p>
            <p className={styles.brandName}>{copyrightRight}</p>
          </div>
        </div>
      </footer>
    );
  },
);
