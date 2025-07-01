/* eslint-disable no-underscore-dangle */
import { graphqlRequest } from 'src/net/graphql/graphqlRequest';
import type { GlobalSettings } from '../../../app/[[...slug]]/page.types';
import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import { linkTransformer } from '../../../data/transformers/linkTransformer';
import type { NewsSectionIdentifierFragment } from '../../../graphql/graphql';
import { NewsSection } from './NewsSection';
import { newsSectionQuery } from './NewsSection.query';
import { type News, type NewsSectionProps } from './NewsSection.types';

export const newsSectionTransformer = createPropsTransformer(
  NewsSection,
  async (
    identifier: NewsSectionIdentifierFragment,
    { includeDrafts }: GlobalSettings,
  ): Promise<NewsSectionProps> => {
    const { id } = identifier;

    const { data, allNews } = await graphqlRequest({
      query: newsSectionQuery,
      variables: {
        id: id ?? '',
      },
      includeDrafts,
    });

    if (!data) {
      throw new ReferenceError(`Content entry "${id}" of type "NewsSection" not found or invalid.`);
    }

    try {
      // News items are already sorted by date descending from the query
      const sortedNews = allNews ?? ([] as Array<News>);

      // Determine which news items to display based on display mode
      const maxItems = data.maxItems ?? 4;

      // For automatic selection or fallback, use the latest news items up to maxItems
      const filteredNews = sortedNews.slice(0, maxItems);

      const news = filteredNews.map((item) => ({
        id: item._id ?? '',
        title: item.title ?? '',
        date: item.date ?? '',
        icon: item.icon?.asset?.url ?? '',
        link: {
          href: `/nieuws/${item._id ?? ''}`,
          children: item.title ?? '',
          ariaLabel: `Lees meer over ${item.title ?? ''}`,
        },
      }));

      return {
        title: data.header?.title ?? 'Nieuws',
        news,
        ...(data.link
          ? {
              link: {
                ...linkTransformer(data.link),
                children: data.header?.title ?? 'Nieuws',
              },
            }
          : {}),
      };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error transforming news section:', error);
      return {
        title: data.header?.title ?? 'Nieuws',
        news: [],
        ...(data.link
          ? {
              link: linkTransformer(data.link),
            }
          : {}),
      };
    }
  },
);
