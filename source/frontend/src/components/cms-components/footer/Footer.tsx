'use client';

import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import classNames from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ReactElement, useMemo } from 'react';
import FooterLogo from '../../icons/footer-logo.svg';
import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.types';

export type FooterRefs = MutableRefs<{
  self: HTMLElement;
}>;

export const Footer = ensuredForwardRef<HTMLElement, FooterProps>(
  (
    { links = [], copyrightLeft, copyrightRight, footerVariant = 'darkBackground' },
    ref,
  ): ReactElement => {
    const refs = useRefs<FooterRefs>({
      self: ref,
    });
    const pathname = usePathname();

    const linksWithActive = useMemo(
      () =>
        links.map((item) => ({
          ...item,
          isActive: pathname.includes(item.href),
        })),
      [links, pathname],
    );

    return (
      <footer ref={refs.self} className={classNames(styles.footer, styles[footerVariant])}>
        <div className={styles.footerContent}>
          <div className={styles.linksWrapper}>
            <div className={styles.leftLinks}>
              {linksWithActive.slice(0, Math.ceil(links.length / 2)).map((link, index) => (
                <Link
                  // eslint-disable-next-line react/no-array-index-key
                  key={`left-link-${index}`}
                  href={link.href}
                  className={classNames(link.isActive && styles.active, styles.link)}
                >
                  {link.children}
                </Link>
              ))}
            </div>
            <div className={styles.rightLinks}>
              {linksWithActive.slice(Math.ceil(links.length / 2)).map((link, index) => (
                <Link
                  // eslint-disable-next-line react/no-array-index-key
                  key={`right-link-${index}`}
                  href={link.href}
                  className={classNames(link.isActive && styles.active, styles.link)}
                >
                  {link.children}
                </Link>
              ))}
            </div>
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
