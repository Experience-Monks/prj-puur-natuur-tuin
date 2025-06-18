/* eslint-disable @typescript-eslint/no-unnecessary-condition */
'use client';

import { type ReactElement, useEffect, useState } from 'react';
import { ErrorBoundary } from '../../utils/ErrorBoundary/ErrorBoundary';
import { type ComponentRendererProps } from '../ComponentRenderer/ComponentRenderer';
import { sectionComponentMap } from '../ComponentRenderer/ComponentRenderer.componentMap';
import { sectionTransformerMap } from '../ComponentRenderer/ComponentRenderer.transformerMap';
import styles from './SectionRenderer.module.scss';

/**
 * Generate a section ID based on the component type
 * Using hardcoded IDs for better reliability across pages and when sections are reordered
 */
const generateSectionId = (_type: string, title?: string, index?: number): string => {
  switch (_type) {
    case 'newsSection': {
      return 'news-section';
    }
    case 'programSection': {
      return 'program-section';
    }
    case 'introSection': {
      return 'intro-section';
    }
    case 'gallerySection': {
      return 'gallery-section';
    }
    case 'aboutSection': {
      return 'about-section';
    }
    case 'heroSection': {
      return 'hero-section';
    }
    default: {
      return title
        ? `${_type}-${title}`.toLowerCase().replaceAll(/[^\da-z]/gu, '-')
        : `${_type}-${index ?? 0}`;
    }
  }
};

export type SectionRendererProps = {
  component: ComponentRendererProps['components'][number];
  index: number;
  navigationSlugs?: Array<Array<string>>;
  landingPageSlug?: string;
  pageData?: Record<string, unknown>;
  params?: Record<string, unknown>;
};

export function SectionRenderer({
  component,
  index,
  navigationSlugs,
  landingPageSlug,
  pageData,
  params,
}: SectionRendererProps): ReactElement | null {
  const { _type, key, title } = component as {
    _type: string;
    key?: string;
    title?: string;
  };

  const [transformedProps, setTransformedProps] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const Component = sectionComponentMap[_type as keyof typeof sectionComponentMap];
  const transformer = sectionTransformerMap[_type as keyof typeof sectionTransformerMap];

  const componentKey = key ?? `${_type}-${index}`;

  const sectionId = generateSectionId(_type, title, index);

  useEffect(() => {
    if (!component || !_type) {
      setIsLoading(false);
      return;
    }

    if (!Component) {
      setIsLoading(false);
      return;
    }

    if (!transformer) {
      setIsLoading(false);
      return;
    }

    const context = {
      navigationSlugs,
      params,
      landingPageSlug,
      pageData,
    };

    const applyTransformer = async (): Promise<void> => {
      try {
        setIsLoading(true);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = await transformer(component as any, context);
        setTransformedProps(result as Record<string, unknown>);
        setError(null);
      } catch (error_) {
        const errorObject = error_ as Error;
        setError(errorObject);
      } finally {
        setIsLoading(false);
      }
    };

    applyTransformer();
  }, [
    component,
    _type,
    Component,
    transformer,
    navigationSlugs,
    params,
    landingPageSlug,
    pageData,
  ]);

  if (!component || !_type) {
    return null;
  }

  if (isLoading) {
    return (
      <div
        id={sectionId}
        className={
          index === 0
            ? `${styles.section} ${styles.firstSection} ${styles.loadingSection}`
            : `${styles.section} ${styles.loadingSection}`
        }
      >
        <div className={styles.loadingIndicator}>Loading...</div>
      </div>
    );
  }

  if (error || !transformedProps) {
    return (
      <div
        id={sectionId}
        className={index === 0 ? `${styles.section} ${styles.firstSection}` : styles.section}
      >
        <div className={styles.fallbackMessage}>
          {error ? `Error rendering ${_type}: ${error.message}` : `Could not render ${_type}`}
        </div>
      </div>
    );
  }

  if (!Component) {
    return (
      <div
        id={sectionId}
        className={index === 0 ? `${styles.section} ${styles.firstSection}` : styles.section}
      >
        <div className={styles.fallbackMessage}>Component not found for: {_type}</div>
      </div>
    );
  }

  return (
    <ErrorBoundary key={componentKey}>
      <div
        id={sectionId}
        className={index === 0 ? `${styles.section} ${styles.firstSection}` : styles.section}
      >
        <Component title="" news={[]} programs={[]} links={[]} {...transformedProps} />
      </div>
    </ErrorBoundary>
  );
}
