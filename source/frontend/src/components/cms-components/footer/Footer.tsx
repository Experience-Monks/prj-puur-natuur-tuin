'use client';

import { ensuredForwardRef, type MutableRefs, useRefs } from '@mediamonks/react-kit';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { useCallback } from 'react';
import FooterLogo from '../../icons/footer-logo.svg';
import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.types';

export type FooterRefs = MutableRefs<{
  self: HTMLElement;
}>;

export const Footer = ensuredForwardRef<HTMLElement, FooterProps>(
  ({ links = [], copyright }, ref): ReactElement => {
    const refs = useRefs<FooterRefs>({
      self: ref,
    });

    const onLinkClick = useCallback(
      (href: string) =>
        (event: React.MouseEvent<HTMLAnchorElement>): void => {
          // Check if it's a section link
          if (href.startsWith('#')) {
            event.preventDefault();
            const targetId = href.slice(1);
            const targetElement = document.querySelector(`#${targetId}`);

            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        },
      [],
    );

    const currentYear = new Date().getFullYear();
    const copyrightText = copyright ?? `©${currentYear}`;

    return (
      <footer ref={refs.self} className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.linksWrapper}>
            {links.length > 0 &&
              links.map((link: { label: string; href: string }) => (
                <Link
                  key={`footer-link-${link.label}`}
                  href={link.href}
                  onClick={onLinkClick(link.href)}
                >
                  {link.label}
                </Link>
              ))}
          </div>

          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <FooterLogo className={styles.logo} />
            </div>
          </div>

          <div className={styles.brandSection}>
            <p className={styles.copyright}>{copyrightText}</p>
            <p className={styles.brandName}>PuurNatuurTuin</p>
          </div>
        </div>
      </footer>
    );
  },
);
