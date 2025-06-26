import { graphqlRequest } from 'src/net/graphql/graphqlRequest';
import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import type { NewsSectionIdentifierFragment } from '../../../graphql/graphql';
import { processButtonLink } from '../../buttons/button/Button.utils';
import { NewsSection } from './NewsSection';
import { newsSectionQuery } from './NewsSection.query';
import type { NewsSectionProps } from './NewsSection.types';

export const newsSectionTransformer = createPropsTransformer(
  NewsSection,
  async (
    identifier: NewsSectionIdentifierFragment,
    { includeDrafts }: { includeDrafts: boolean },
  ): Promise<NewsSectionProps> => {
    const { id } = identifier;

    const { data } = await graphqlRequest({
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
      // Fetch the news items data using the typed document
      // const newsResponse = (await graphqlRequest({
      //   query: newsSectionData,
      // })) satisfies NewsSectionDataResponse;

      // Ensure frontend sorts news by date descending (latest first)
      // const sortedNews = [...(newsResponse.allNews ?? [])].sort((a, b) =>
      //   (b.date ?? '').localeCompare(a.date ?? ''),
      // );

      const sortedNews = [];

      // Determine which news items to display based on selection type
      const selectionType = data.selectionType ?? 'automatic';
      const maxItems = data.maxItems ?? 3;

      let filteredNews = [];

      if (selectionType === 'automatic') {
        // For automatic selection, use the latest news items up to maxItems
        filteredNews = sortedNews.slice(0, maxItems);
        console.log('Using automatic selection with', maxItems, 'items');
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      } else if (selectionType === 'manual' && data?.newsItems && data?.newsItems.length > 0) {
        // For manual selection, use the specifically selected news items
        // We need to match the selected items with the full news data
        // eslint-disable-next-line no-underscore-dangle
        const selectedIds = new Set(data.newsItems.map((item) => item._ref));

        // Filter the news items to only include those that were manually selected
        // eslint-disable-next-line no-underscore-dangle
        filteredNews = sortedNews.filter((item) => selectedIds.has(item._id ?? ''));
        console.log('Using manual selection with', filteredNews.length, 'items');
      } else {
        // Fallback to latest items if manual selection is empty
        filteredNews = sortedNews.slice(0, maxItems);
        console.log('Falling back to automatic selection');
      }

      const news = filteredNews.map((item) => {
        // Use destructuring to avoid lint errors with _id
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { _id, title, date, icon } = item;

        return {
          id: _id ?? '',
          title: title ?? '',
          date: date ?? '',
          icon: icon?.asset?.url ?? '',
        };
      });

      // This allows our code to follow the pattern while working with the current schema
      const ctaLabel = data.ctaButton?.text ?? data.ctaButton?.label;
      const ctaUrl = processButtonLink(data.ctaButton ?? {});
      const showButton = Boolean(ctaLabel && ctaUrl);

      return {
        title: data.title ?? 'Nieuws',
        news,
        ctaLabel,
        ctaUrl,
        showButton,
      };
    } catch (error) {
      console.error('Error transforming news section:', error);
      return {
        title: data.title ?? 'Nieuws',
        news: [],
        showButton: true,
        ctaLabel: '',
        ctaUrl: '',
      };
    }
  },
);
