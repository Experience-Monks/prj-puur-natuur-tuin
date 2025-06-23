/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { type ReactElement } from 'react';
import { sectionTransformerMap } from '../../components/layout/ComponentRenderer/ComponentRenderer.transformerMap';
import { CmsPageTemplate } from '../../components/templates/CmsPageTemplate/CmsPageTemplate';
import { type NextPageProps } from '../../definitions';
import { getNavigationSlugs } from '../../utils/route.utils';
import { getGlobalPageData, getLandingPageSlug, getPageData } from './page.utils';

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
      console.error('Component is undefined or null');
      return { _type: 'unknown', transformError: true };
    }

    const { _type, _key } = component;

    // Skip components without a key or type
    if (!_key || !_type) {
      console.error(`Component ${_type || 'undefined'} is missing a _key or _type`);
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
        console.error(`Error transforming component ${_type}:`, error);
        // Add the original component with an error flag
        return {
          ...component,
          transformError: true,
        };
      }
    } else {
      // If no transformer exists, pass through the original component
      console.warn(`No transformer found for component type: ${_type}`);
      return component;
    }
  });

  // Wait for all transformations to complete
  return Promise.all(transformPromises);
}

export default async function Page(props: NextPageProps): Promise<ReactElement> {
  // Make sure we retrieve all navigation slugs so we can dynamically build up cms navigation links
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

  // Filter out any undefined or invalid components before transformation
  const validComponents = (page.content ?? []).filter((component) => {
    if (!component) {
      console.error('Found undefined component in page content');
      return false;
    }

    if (!component._type) {
      console.error('Found component without _type in page content');
      return false;
    }

    if (!component._key) {
      console.error(`Component of type ${component._type} is missing a _key`);
      // We'll keep it and add a key in transformComponents
      return true;
    }

    return true;
  });

  // Transform components server-side to handle async transformers
  const transformedComponents = await transformComponents(
    validComponents,
    navigationSlugs,
    landingPageSlug,
    props.params,
    pageData,
  );

  // Debug log for NewsSection and ProgramSection components
  const newsSections = transformedComponents.filter((comp) => comp._type === 'newsSection');
  const programSections = transformedComponents.filter((comp) => comp._type === 'programSection');

  if (newsSections.length > 0) {
    console.log(
      '[Page] NewsSection components after transformation:',
      newsSections.map((section) => ({
        _type: section._type,
        _key: section._key,
        showButton: section.showButton,
        ctaLabel: section.ctaLabel,
        ctaUrl: section.ctaUrl,
      })),
    );
  }

  if (programSections.length > 0) {
    console.log(
      '[Page] ProgramSection components after transformation:',
      programSections.map((section) => ({
        _type: section._type,
        _key: section._key,
        showButton: section.showButton,
        ctaLabel: section.ctaLabel,
        ctaUrl: section.ctaUrl,
      })),
    );
  }

  return (
    <CmsPageTemplate
      header={pageHeader}
      components={transformedComponents}
      footer={pageFooter}
      navigationSlugs={navigationSlugs}
      landingPageSlug={landingPageSlug}
      params={props.params}
      pageData={pageData}
    />
  );
}
