'use client';

import { ensuredForwardRef, useRefs, useToggle } from '@mediamonks/react-kit';
import { useAnimation } from '@mediamonks/react-kit/gsap';
import classNames from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  type ReactElement,
  type MouseEvent,
  useMemo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useIsSmallViewport } from '../../../hooks/useIsSmallViewport';
import DefaultLogo from '../../icons/logo.svg?component';
import { createMobileMenuOpenAnimation } from './Navigation.animations';
import styles from './Navigation.module.scss';
import { type NavigationProps, type NavigationRefs } from './Navigation.types';

export const Navigation = ensuredForwardRef<HTMLElement, NavigationProps>(
  ({ links }, ref): ReactElement => {
    const refs = useRefs<NavigationRefs>({
      self: ref,
    });
    const pathname = usePathname();

    const isSmallViewport = useIsSmallViewport();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, toggleMobileMenu] = useToggle(false);

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileLinksRef = useRef<HTMLDivElement>(null);

    const linksWithActive = useMemo(
      () =>
        links.map((item) => ({
          ...item,
          isActive: pathname.includes(item.href),
        })),
      [links, pathname],
    );

    // Use the useAnimation hook to create and manage the animation
    const timeline = useAnimation(
      () =>
        createMobileMenuOpenAnimation(mobileMenuRef.current, mobileLinksRef.current, {
          duration: 0.2,
          ease: 'power3.inOut',
          stagger: 0.01,
        }),
      [isSmallViewport],
    );

    useEffect(() => {
      const handleScroll = (): void => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() => {
      // Close mobile menu when switching to desktop view
      if (!isSmallViewport && isMobileMenuOpen) {
        toggleMobileMenu(false);
      }
    }, [isSmallViewport, isMobileMenuOpen, toggleMobileMenu]);

    // Control animation based on menu state
    useEffect(() => {
      if (timeline.current) {
        if (isMobileMenuOpen) {
          // Play the animation forward
          timeline.current.play();

          // Prevent body scrolling when menu is open
          document.body.style.overflow = 'hidden';
        } else {
          // Reverse the animation
          timeline.current.reverse();

          // Restore body scrolling when menu is closed
          document.body.style.overflow = '';
        }
      }
    }, [isMobileMenuOpen, timeline]);

    const onNavigationClick = useCallback(
      (event: MouseEvent<HTMLAnchorElement>, href: string): void => {
        event.preventDefault();

        // Check if it's a section link
        if (href.startsWith('#')) {
          const targetId = href.slice(1);
          const targetElement = document.querySelector(`#${targetId}`);

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Close mobile menu after clicking a link
            if (isSmallViewport) {
              toggleMobileMenu(false);
            }
          } else {
            // Silently handle missing elements
            // For external links, navigate normally
            window.location.href = href;
          }
        } else {
          // Regular link navigation
          window.location.href = href;
        }
      },
      [isSmallViewport, toggleMobileMenu],
    );

    const onLinkClick = useCallback(
      (href: string) =>
        (event: MouseEvent<HTMLAnchorElement>): void => {
          onNavigationClick(event, href);
        },
      [onNavigationClick],
    );

    const onToggleMobileMenu = useCallback((): void => {
      toggleMobileMenu();
    }, [toggleMobileMenu]);

    // Render mobile navigation
    if (isSmallViewport) {
      return (
        <nav
          ref={refs.self}
          className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''} ${styles.mobileNavigation}`}
        >
          <div className={styles.mobileHeader}>
            <div className={styles.logoContainer}>
              <DefaultLogo className={styles.logo} />
            </div>
            <button
              type="button"
              className={`${styles.hamburgerButton} ${isMobileMenuOpen ? styles.open : ''}`}
              onClick={onToggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
          </div>

          <div
            ref={mobileMenuRef}
            className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.visible : ''}`}
          >
            <div ref={mobileLinksRef} className={styles.mobileLinks}>
              {linksWithActive.map((link) => (
                <Link
                  key={`mobile-link-${link.label}`}
                  href={link.href}
                  className={classNames(link.isActive && styles.active, styles.mobileLink)}
                  onClick={onLinkClick(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      );
    }

    // Render desktop navigation
    return (
      <nav ref={refs.self} className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.leftLinks}>
          {linksWithActive.slice(0, Math.ceil(links.length / 2)).map((link) => (
            <Link
              key={`left-link-${link.label}`}
              href={link.href}
              className={classNames(link.isActive && styles.active, styles.link)}
              onClick={onLinkClick(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.logoContainer}>
          <DefaultLogo className={styles.logo} />
        </div>
        <div className={styles.rightLinks}>
          {linksWithActive.slice(Math.ceil(links.length / 2)).map((link) => (
            <Link
              key={`right-link-${link.label}`}
              href={link.href}
              className={classNames(link.isActive && styles.active, styles.link)}
              onClick={onLinkClick(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    );
  },
);

Navigation.displayName = 'Navigation';
