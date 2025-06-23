/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { SectionTypeName } from 'src/data/enum/SectionTypeName';
import { graphqlRequest } from 'src/net/graphql/graphqlRequest';
import type { ProgramSectionDataQuery } from '../../../graphql/graphql';
import { processButtonLink } from '../../buttons/button/Button.utils';
import { programSectionData } from './ProgramSection.query';

// Define the GraphQL response type
type ProgramSectionDataResponse = ProgramSectionDataQuery;

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
    text?: string;
    label?: string;
    link?: {
      linkType?: 'internal' | 'external' | 'email';
      internalLink?: { slug?: { current?: string } };
      externalUrl?: string;
      emailAddress?: string;
    };
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
  showButton?: boolean;
  refs?: {
    container?: React.RefObject<HTMLDivElement>;
  };
};

export async function programSectionTransformer(
  section: ProgramSectionCms,
): Promise<Omit<ProgramSectionProps, 'refs'>> {
  // If enabled is explicitly set to false, don't render this section
  if (section.enabled === false) {
    console.log('[ProgramSectionTransformer] Section disabled, returning empty title');
    return { title: '', programs: [] };
  }

  // Fetch all programs from the CMS
  const response = (await graphqlRequest({
    query: programSectionData,
  })) satisfies ProgramSectionDataResponse;
  const allPrograms = response.allProgram ?? [];

  if (allPrograms.length === 0) {
    console.log('[ProgramSectionTransformer] No programs found');
    return { title: section.header?.title ?? 'Program', programs: [] };
  }

  console.log('[ProgramSectionTransformer] Found', allPrograms.length, 'programs');

  // Determine the maximum number of items to display
  const maxItems = section.maxItems ?? 5;
  let filteredPrograms = [];

  // Handle manual selection if specified
  if (
    section.selectionType === 'manual' &&
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

  const ctaLabel = section.ctaButton?.text ?? section.ctaButton?.label;
  const ctaUrl = processButtonLink(section.ctaButton ?? {});
  const showButton = Boolean(ctaLabel && ctaUrl);

  console.log('[ProgramSectionTransformer] CTA props:', {
    ctaLabel,
    ctaUrl,
    showButton,
    hasCtaButton: Boolean(section.ctaButton),
    ctaButtonText: section.ctaButton?.text,
  });

  return {
    title: section.header?.title ?? 'Program',
    programs,
    ctaLabel,
    ctaUrl,
    showButton,
  };
}
