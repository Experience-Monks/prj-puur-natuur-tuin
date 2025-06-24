import { type Metadata } from 'next/types';
import type { PageDataFragment } from '../../graphql/graphql';
import { extend } from '../../utils/debug';

const debug = extend('baseMetadata');

// TODO expand data
export async function baseMetadata(data: PageDataFragment['openGraph']): Promise<Metadata> {
  // const hasOgData = data.ogTitle || data.ogDescription || data.ogImage;
  // let canonicalUrl = null;

  debug.log(data);
  const ogImage = data?.image?.asset?.url;

  const openGraph = {
    ...(data?.title ? { title: data.title } : {}),
    ...(data?.description ? { description: data.description } : {}),
    ...(ogImage ? { image: ogImage } : {}),
  };

  // if (data.canonicalUrl) {
  //   const canonicalPathData = await graphqlRequest({
  //     query: resolvePathByPageIdQuery,
  //     variables: {
  //       pageId: data.canonicalUrl?.id ?? '',
  //     },
  //   });
  //
  //   const { path } = canonicalPathData?.page?.at(0) ?? {};
  //
  //   canonicalUrl = path;
  // }

  return {
    title: data?.title,
    description: data?.description ?? '',
    openGraph,
    // robots: {
    //   index: data.index,
    //   googleBot: {
    //     index: data.index,
    //   },
    // },
    // alternates: {
    //   ...(canonicalUrl ? { canonical: canonicalUrl } : {}),
    // },
  };
}
