import { camelCase } from 'lodash-es';
import { ObjectDefinition } from 'sanity';

/**
 * Helper to create standardized reusable fragments
 * 
 * @param fragmentId The ID of the fragment (e.g., 'button')
 * @param configuration The fragment configuration
 * @returns A standardized fragment object definition
 */
export function createFragment(
  fragmentId: string,
  {
    fields = [],
    fieldsets = [],
    preview = {},
    ...rest
  }: Partial<ObjectDefinition> = {},
): ObjectDefinition {
  return {
    type: 'object',
    name: `${camelCase(fragmentId)}Fragment`,
    title: fragmentId,
    fields,
    fieldsets,
    preview: {
      select: {
        title: 'title',
      },
      prepare: ({ title }) => ({
        title: title || fragmentId,
        subtitle: 'Fragment',
      }),
      ...preview,
    },
    ...rest,
  };
}
