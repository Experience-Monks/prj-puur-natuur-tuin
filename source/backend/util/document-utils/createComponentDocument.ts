import { camelCase } from 'lodash-es';
import { DocumentDefinition } from 'sanity';
import { getComponentSpacingObject } from '../object-utils/createComponentSpacingObject';

const defaultOptions = {
  previewSubtitleSelector: 'title',
  includeComponentSpacing: true,
  includeComponentSlug: false,
};

/**
 * Helper to create standardized component documents
 *
 * @param componentId The ID of the component (e.g., 'heroSection')
 * @param configuration The component configuration
 * @param options Additional options for the component
 * @returns A standardized component document definition
 */
export function createComponentDocument(
  componentId: string,
  {
    fields = [],
    fieldsets = [],
    preview = {},
    initialValue = {},
    ...rest
  }: Partial<DocumentDefinition> = {},
  options: Partial<typeof defaultOptions> = {},
): DocumentDefinition {
  const { previewSubtitleSelector, includeComponentSpacing, includeComponentSlug } = {
    ...defaultOptions,
    ...options,
  };

  return {
    type: 'document',
    name: camelCase(componentId),
    title: componentId,
    initialValue: {
      ...initialValue,
      ...(includeComponentSpacing
        ? {
            marginTop: 'medium',
            marginBottom: 'medium',
          }
        : {}),
    },
    preview: {
      select: {
        title: previewSubtitleSelector,
        media: 'image',
      },
      prepare: ({ title, media }) => ({
        title: title || componentId,
        subtitle: componentId,
        media,
      }),
      ...preview,
    },
    fieldsets: [
      ...(includeComponentSpacing
        ? [
            {
              name: 'spacing',
              title: 'Spacing',
              description: 'Configure the spacing around this component',
              options: { collapsible: true, collapsed: true },
            },
          ]
        : []),
      ...(includeComponentSlug
        ? [
            {
              name: 'metadata',
              title: 'Metadata',
              description: 'Additional information about this component',
              options: { collapsible: true, collapsed: true },
            },
          ]
        : []),
      ...fieldsets,
    ],
    fields: [
      ...(includeComponentSpacing
        ? [
            getComponentSpacingObject('marginTop', {
              fieldset: 'spacing',
              description: 'Space above the component',
            }),
            getComponentSpacingObject('marginBottom', {
              fieldset: 'spacing',
              description: 'Space below the component',
            }),
          ]
        : []),
      ...(includeComponentSlug
        ? [
            {
              name: 'componentId',
              title: 'Component ID',
              type: 'string',
              fieldset: 'metadata',
              description: 'Unique identifier for this component (used for linking and navigation)',
              validation: (Rule: { required: () => any }) => Rule.required(),
            },
          ]
        : []),
      ...fields,
    ],
    ...rest,
  };
}
