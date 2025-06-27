/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-underscore-dangle */
import { type Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { type ReactElement } from 'react';
import { type FooterVariant } from '../../components/cms-components/footer/Footer.types';
import { ComponentRenderer } from '../../components/layout/component-renderer/ComponentRenderer';
import { DraftMode } from '../../components/utils/DraftMode/DraftMode';
import { baseMetadata } from '../../data/metadata';
import { type NextPageProps } from '../../definitions';
import { extend } from '../../utils/debug';
import { type PageData, pageTransformer } from './page.transformers';
import { type GlobalSettings } from './page.types';
import { getGlobalPageData, getPageData, TransformerPageData } from './page.utils';

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

  debug.info(`Start fetching settings`);
  const settings = await getGlobalPageData();

  if (!page?.content || !settings) {
    // Return an error or fallback component instead of using Next.js notFound()
    return notFound();
  }

  // Prepare the header with the correct type
  const pageHeader = page.overwrittenMainNavigation
    ? { ...page.overwrittenMainNavigation, _type: 'Navigation' }
    : { ...settings.mainNavigation, _type: 'Navigation' };

  // Prepare the footer with the correct type
  const pageFooter = page.overwrittenFooter
    ? { ...page.overwrittenFooter, _type: 'footer' }
    : { ...settings.mainFooter, _type: 'footer' };

  const context: GlobalSettings = {
    defaults: {
      navigation: pageHeader,
      footer: pageFooter,
      footerVariant: page?.footerVariant as FooterVariant,
      fallbackImage: settings.fallbackImage?.asset?.url ?? '',
    },
    globalLabels: {
      nextPage: settings.nextPage ?? '',
      previousPage: settings.previousPage ?? '',
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
