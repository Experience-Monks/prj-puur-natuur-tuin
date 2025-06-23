/* eslint-disable no-underscore-dangle */
import { graphqlRequest } from 'src/net/graphql/graphqlRequest';
import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import type { ProgramSectionIdentifierFragment } from '../../../graphql/graphql';
import { processButtonLink } from '../../buttons/button/Button.utils';
import { ProgramSection } from './ProgramSection';
import { programSectionQuery } from './ProgramSection.query';
import { type ProgramSectionProps } from './ProgramSection.types';

export const programSectionTransformer = createPropsTransformer(
  ProgramSection,
  async (
    identifier: ProgramSectionIdentifierFragment,
    { includeDrafts }: { includeDrafts: boolean },
  ): Promise<ProgramSectionProps> => {
    const { id } = identifier;

    const { data } = await graphqlRequest({
      query: programSectionQuery,
      variables: {
        id: id ?? '',
      },
      includeDrafts,
    });

    if (!data) {
      throw new ReferenceError(`Content entry "${id}" of type "NewsSection" not found or invalid.`);
    }

    const allPrograms = data.allProgram ?? [];

    if (allPrograms.length === 0) {
      return { title: data.header?.title ?? 'Program', programs: [] };
    }

    // Determine the maximum number of items to display
    const maxItems = data.maxItems ?? 5;
    let filteredPrograms = [];

    // Handle manual selection if specified
    if (data.selectionType === 'manual' && data.programItems && data.programItems.length > 0) {
      // For manual selection, use the specifically selected programs
      const selectedIds = new Set(data.programItems.map((item) => item._ref));

      // Filter the programs to only include those that were manually selected
      filteredPrograms = allPrograms.filter((item) => selectedIds.has(item._id ?? ''));
    } else {
      // Fallback to latest items if manual selection is empty
      filteredPrograms = allPrograms.slice(0, maxItems);
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

    const ctaLabel = data.ctaButton?.text ?? data.ctaButton?.label;
    const ctaUrl = processButtonLink(data.ctaButton ?? {});
    const showButton = Boolean(ctaLabel && ctaUrl);

    return {
      title: data.header?.title ?? 'Program',
      programs,
      ctaLabel,
      ctaUrl,
      showButton,
    };
  },
);
