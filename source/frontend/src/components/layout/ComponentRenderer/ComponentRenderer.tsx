'use client';

import { type ReactElement } from 'react';
import { SectionRenderer } from '../SectionRenderer/SectionRenderer';
import styles from './ComponentRenderer.module.scss';

export interface ComponentRendererProps {
  [key: string]: unknown;

  components: Array<{
    [key: string]: unknown;
    key?: string;
    _type: string;
    title?: string;
    isTransformed?: boolean;
  }>;
  landingPageSlug?: string;
  navigationSlugs?: Array<Array<string>>;
  pageData?: Record<string, unknown>;
  params?: Record<string, unknown>;
}

export function ComponentRenderer({
  components,
  navigationSlugs,
  landingPageSlug,
  pageData,
  params,
}: ComponentRendererProps): ReactElement {
  if (components.length === 0) {
    return (
      <div>
        <p className={styles.fallbackMessage}>
          No components to render for this page, add some on the CMS.
        </p>
      </div>
    );
  }

  return (
    <>
      {components.map((component, index) => {
        const { _type: componentType, key } = component;
        const stableKey = key ?? `${componentType}-${index}-${JSON.stringify(component)}`;

        return (
          <SectionRenderer
            key={stableKey}
            component={component}
            index={index}
            navigationSlugs={navigationSlugs}
            landingPageSlug={landingPageSlug}
            pageData={pageData}
            params={params}
          />
        );
      })}
    </>
  );
}
