/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-underscore-dangle */
import { type Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { type ReactElement } from 'react';
import { ComponentRenderer } from '../../components/layout/component-renderer/ComponentRenderer';
import { DraftMode } from '../../components/utils/DraftMode/DraftMode';
import { baseMetadata } from '../../data/metadata';
import { type NextPageProps } from '../../definitions';
import { extend } from '../../utils/debug';
import { type PageData, pageTransformer } from './page.transformers';
import { getGlobalPageData, getPageData } from './page.utils';

const debug = extend('PageGeneration');

export async function generateMetadata(props: NextPageProps): Promise<Metadata> {
  const page = await getPageData(props);

  if (!page?.openGraph) {
    return {};
  }

  return baseMetadata(page.openGraph);
}

export const revalidate = 600;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.

// eslint-disable-next-line unicorn/prevent-abbreviations
export const dynamicParams = true;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function generateStaticParams(): Promise<
  Array<{
    page: ReadonlyArray<string>;
  }>
> {
  return [
    {
      page: [''],
    },
  ];
}

export default async function Page(props: NextPageProps): Promise<ReactElement | undefined> {
  const { isEnabled } = await draftMode();
  const includeDrafts = isEnabled || false;

  debug.info(`Start fetching page data`);

  const page = await getPageData(props);
  const { footer, header } = await getGlobalPageData({
    headerVariant: page?.headerVariant,
  });

  debug.info(`footer data fetched`, footer);

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

  const transformedPageData = await pageTransformer(page as PageData, context, {
    skipMetadata: false,
  });

  return (
    <>
      {isEnabled && <DraftMode />}
      <ComponentRenderer {...transformedPageData} />
    </>
  );
}
