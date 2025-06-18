/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { SectionTypeName } from 'src/data/enum/SectionTypeName';
import { graphqlRequest } from 'src/net/graphql/graphqlRequest';
import { newsSectionData } from './NewsSection.query';
import type { NewsSectionProps } from './NewsSection.types';

// Define the GraphQL response type
type NewsSectionDataResponse = {
  allNews?: Array<{
    _id?: string;
    title?: string;
    date?: string;
    icon?: {
      asset?: {
        url?: string;
      };
    };
  }>;
};

export type NewsSectionCms = {
  _type: SectionTypeName.NewsSection;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _key?: string;
  title?: string;
  description?: string;
  selectionType?: 'automatic' | 'manual';
  maxItems?: number;
  newsItems?: Array<{
    _ref: string;
    _id: string;
    title?: string;
    date?: string;
    icon?: {
      asset?: {
        url?: string;
      };
    };
  }>;
};

export async function newsSectionTransformer(
  section: NewsSectionCms,
): Promise<Omit<NewsSectionProps, 'refs'>> {
  try {
    // Fetch the news items data
    const newsResponse = (await graphqlRequest({
      query: newsSectionData,
    })) satisfies NewsSectionDataResponse;

    // Ensure frontend sorts news by date descending (latest first)
    const sortedNews = [...(newsResponse.allNews ?? [])].sort((a, b) =>
      (b.date ?? '').localeCompare(a.date ?? ''),
    );

    // Determine which news items to display based on selection type
    const selectionType = section.selectionType ?? 'automatic';
    const maxItems = section.maxItems ?? 3;

    let filteredNews = [];

    if (selectionType === 'automatic') {
      // For automatic selection, use the latest news items up to maxItems
      filteredNews = sortedNews.slice(0, maxItems);
      console.log('Using automatic selection with', maxItems, 'items');
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    } else if (selectionType === 'manual' && section.newsItems && section.newsItems.length > 0) {
      // For manual selection, use the specifically selected news items
      // We need to match the selected items with the full news data
      // eslint-disable-next-line no-underscore-dangle
      const selectedIds = new Set(section.newsItems.map((item) => item._ref));

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

    return {
      title: section.title ?? 'Nieuws',
      news,
    };
  } catch (error) {
    console.error('Error transforming news section:', error);
    return { title: section.title ?? 'Nieuws', news: [] };
  }
}
