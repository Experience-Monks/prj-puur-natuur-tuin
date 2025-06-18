'use client';

import { type ReactElement } from 'react';
import { ComponentRenderer } from '../../layout/ComponentRenderer/ComponentRenderer';

// Extended type to support dynamic routing and navigation
export type CmsPageTemplateProps = {
  [key: string]: unknown;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  components: Array<{ _type: string; [key: string]: unknown }>;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  header?: { _type: string; [key: string]: unknown };
  // eslint-disable-next-line @typescript-eslint/member-ordering
  footer?: { _type: string; [key: string]: unknown };
  navigationSlugs?: Array<Array<string>>;
  landingPageSlug?: string;
  params?: { slug?: Array<string> };
  pageData?: {
    headerVariant?: string;
    fallbackImage?: string;
    globalLabels?: {
      nextPage?: string;
      previousPage?: string;
    };
  };
};

export function CmsPageTemplate({
  components,
  header,
  footer,
  navigationSlugs,
  landingPageSlug,
  params,
  pageData,
  ...props
}: CmsPageTemplateProps): ReactElement {
  return (
    <>
      {/* Render header with navigation */}
      {header && (
        <header>
          <ComponentRenderer
            components={[header]}
            navigationSlugs={navigationSlugs}
            landingPageSlug={landingPageSlug}
            params={params}
            pageData={pageData}
            {...props}
          />
        </header>
      )}

      {/* Main content area */}
      <main>
        <ComponentRenderer
          components={components}
          navigationSlugs={navigationSlugs}
          landingPageSlug={landingPageSlug}
          params={params}
          pageData={pageData}
          {...props}
        />
      </main>

      {/* Render footer */}
      {footer && (
        <footer>
          <ComponentRenderer
            components={[footer]}
            navigationSlugs={navigationSlugs}
            landingPageSlug={landingPageSlug}
            params={params}
            pageData={pageData}
            {...props}
          />
        </footer>
      )}
    </>
  );
}
