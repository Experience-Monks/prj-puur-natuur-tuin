/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-underscore-dangle */
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { type ReactElement } from 'react';
import { ComponentRenderer } from '../../components/layout/component-renderer/ComponentRenderer';
import { DraftMode } from '../../components/utils/DraftMode/DraftMode';
import { type NextPageProps } from '../../definitions';
import { extend } from '../../utils/debug';
import { getNavigationSlugs } from '../../utils/route.utils';
import { type PageData, pageTransformer } from './page.transformers';
import { getGlobalPageData, getLandingPageSlug, getPageData } from './page.utils';

const debug = extend('PageGeneration');

export const revalidate = 600;

export default async function Page(props: NextPageProps): Promise<ReactElement | undefined> {
  const { isEnabled } = await draftMode();
  const includeDrafts = isEnabled || false;

  debug.info(`Start fetching page data`);

  // Make sure we retrieve all navigation slugs, so we can dynamically build up cms navigation links
  const navigationSlugs = await getNavigationSlugs();

  const landingPageSlug = await getLandingPageSlug();
  const page = await getPageData(props);
  const { pageData, footer, header } = await getGlobalPageData({
    headerVariant: page?.headerVariant,
  });

  if (!page?.content) {
    // Return an error or fallback component instead of using Next.js notFound()
    return notFound();
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
