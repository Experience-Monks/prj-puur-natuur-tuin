/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { SectionTypeName } from 'src/data/enum/SectionTypeName';
import { graphqlRequest } from 'src/net/graphql/graphqlRequest';
import { programSectionData } from './ProgramSection.query';

// Define the GraphQL response type
type ProgramSectionDataResponse = {
  allProgram?: Array<{
    _id?: string;
    title?: string;
    datetime?: string;
    description?: string;
    image?: {
      asset?: {
        url?: string;
      };
    };
  }>;
};

export type ProgramSectionCms = {
  _type: SectionTypeName.ProgramSection;
  header?: {
    title?: string;
    subtitle?: string;
  };
  _key?: string;
  enabled?: boolean;
  selectionType?: 'automatic' | 'manual';
  maxItems?: number;
  programItems?: Array<{
    _ref: string;
  }>;
  ctaButton?: {
    label?: string;
    url?: string;
  };
};

export type ProgramItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
};

export type ProgramSectionProps = {
  title: string;
  programs: Array<ProgramItem>;
  ctaLabel?: string;
  ctaUrl?: string;
  refs?: {
    container?: React.RefObject<HTMLDivElement>;
  };
};

export async function programSectionTransformer(
  section: ProgramSectionCms,
): Promise<Omit<ProgramSectionProps, 'refs'>> {
  // If enabled is explicitly set to false, don't render this section
  if (section.enabled === false) {
    return { title: '', programs: [] };
  }

  // Fetch all programs from Sanity
  const response = (await graphqlRequest({
    query: programSectionData,
  })) satisfies ProgramSectionDataResponse;

  // Get all available programs
  const allPrograms = response.allProgram ?? [];
  console.log('Total programs available in CMS:', allPrograms.length);

  // Determine which programs to display based on selection type
  const selectionType = section.selectionType ?? 'automatic';
  console.log('ProgramSection CMS settings:', {
    selectionType: section.selectionType,
    maxItems: section.maxItems,
    enabled: section.enabled,
    programItemsCount: section.programItems?.length ?? 0,
  });
  const maxItems = section.maxItems ?? 5;

  let filteredPrograms = [];

  if (selectionType === 'automatic') {
    // For automatic selection, use the latest programs up to maxItems
    filteredPrograms = allPrograms.slice(0, maxItems);
    console.log('Using automatic program selection with', maxItems, 'items');
  } else if (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    selectionType === 'manual' &&
    section.programItems &&
    section.programItems.length > 0
  ) {
    // For manual selection, use the specifically selected programs
    const selectedIds = new Set(section.programItems.map((item) => item._ref));

    // Filter the programs to only include those that were manually selected
    filteredPrograms = allPrograms.filter((item) => selectedIds.has(item._id ?? ''));
    console.log('Using manual program selection with', filteredPrograms.length, 'items');
  } else {
    // Fallback to latest items if manual selection is empty
    filteredPrograms = allPrograms.slice(0, maxItems);
    console.log('Falling back to automatic program selection');
  }

  // Format date and time for display
  const programs = filteredPrograms.map((program) => {
    const dateObject = new Date(program.datetime ?? '');
    const dayOfMonth = dateObject.getDate().toString();

    const options: Intl.DateTimeFormatOptions = { month: 'long' };
    const month = dateObject.toLocaleDateString('nl-NL', options);

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    const time = dateObject.toLocaleTimeString('nl-NL', timeOptions);

    return {
      // eslint-disable-next-line no-underscore-dangle
      id: program._id ?? '',
      title: program.title ?? '',
      date: dayOfMonth,
      month,
      time,
      description: program.description ?? '',
      image: program.image?.asset?.url ?? '',
    };
  });

  // This allows our code to follow the pattern while working with the current schema
  return {
    title: section.header?.title ?? 'Program',
    programs,
    ctaLabel: section.ctaButton?.label,
    ctaUrl: section.ctaButton?.url,
  };
}
