/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-underscore-dangle */
import { draftMode } from 'next/headers';
import { type ReactElement } from 'react';
import { sectionTransformerMap } from '../../components/layout/ComponentRenderer/ComponentRenderer.transformerMap';
import { ComponentRenderer } from '../../components/layout/component-renderer/ComponentRenderer';
import { DraftMode } from '../../components/utils/DraftMode/DraftMode';
import { type NextPageProps } from '../../definitions';
import { extend } from '../../utils/debug';
import { getNavigationSlugs } from '../../utils/route.utils';
import { type PageData, pageTransformer } from './page.transformers';
import { getGlobalPageData, getLandingPageSlug, getPageData } from './page.utils';

const debug = extend('PageGeneration');
/**
 * Helper method to transform components with their respective transformers
 */
async function transformComponents(
  components: Array<{
    [key: string]: unknown;
    _key?: string;
    _type: string;
  }>,
  navigationSlugs?: Array<Array<string>>,
  landingPageSlug?: string,
  parameters?: Record<string, unknown>,
  pageData?: Record<string, unknown>,
): Promise<
  Array<{
    [key: string]: unknown;
    _key?: string;
    _type: string;
    isTransformed?: boolean;
  }>
> {
  if (components.length === 0) {
    return [];
  }

  // Process components in parallel using Promise.all for better performance
  const transformPromises = components.map(async (component) => {
    // Skip undefined or null components
    if (!component) {
      debug.error('Component is undefined or null');
      return { _type: 'unknown', transformError: true };
    }

    const { _type, _key } = component;

    // Skip components without a key or type
    if (!_key || !_type) {
      debug.error(`Component ${_type || 'undefined'} is missing a _key or _type`);
      return {
        ...component,
        _type: _type ?? 'unknown',
        _key: _key ?? `unknown-${Date.now()}`,
        transformError: true,
      };
    }

    const transformer = sectionTransformerMap[_type as keyof typeof sectionTransformerMap];

    if (transformer) {
      try {
        // Apply the transformer with the component data and context
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const transformedComponent = await transformer(component as any, {
          navigationSlugs,
          landingPageSlug,
          params: parameters,
          pageData,
        });

        return {
          ...(transformedComponent as Record<string, unknown>),
          _type,
          _key,
          isTransformed: true,
        };
      } catch (error) {
        debug.error(`Error transforming component ${_type}:`, error);
        // Add the original component with an error flag
        return {
          ...component,
          transformError: true,
        };
      }
    } else {
      // If no transformer exists, pass through the original component
      debug.warn(`No transformer found for component type: ${_type}`);
      return component;
    }
  });

  // Wait for all transformations to complete
  return Promise.all(transformPromises);
}

export const revalidate = 600;

export default async function Page(props: NextPageProps): Promise<ReactElement> {
  const { isEnabled } = await draftMode();
  const includeDrafts = isEnabled || false;

  debug.info(`Start fetching page data`, {
    props,
  });

  // Make sure we retrieve all navigation slugs, so we can dynamically build up cms navigation links
  const navigationSlugs = await getNavigationSlugs();

  const landingPageSlug = await getLandingPageSlug();
  const page = await getPageData(props);
  const { pageData, footer, header } = await getGlobalPageData({
    headerVariant: page?.headerVariant,
  });

  if (!page) {
    // Return an error or fallback component instead of using Next.js notFound()
    return (
      <div>
        <h1>Page not found</h1>
        <p>The requested page could not be found.</p>
      </div>
    );
  }

  // Prepare the header with the correct type
  const pageHeader = page.overwrittenMainNavigation
    ? { ...page.overwrittenMainNavigation, _type: 'stickyNavigation' }
    : { ...header, _type: 'stickyNavigation' };

  // Prepare the footer with the correct type
  const pageFooter = page.overwrittenFooter
    ? { ...page.overwrittenFooter, _type: 'footer' }
    : { ...footer, _type: 'footer' };

  const context = {
    defaults: {
      navigation: pageHeader,
      footer: pageFooter,
    },
    includeDrafts,
  };

  const transformedPageData = await pageTransformer(pageData as PageData, context, {
    skipMetadata: false,
  });

  return (
    <>
      {isEnabled && <DraftMode />}
      <ComponentRenderer {...transformedPageData} />
    </>
  );
}
