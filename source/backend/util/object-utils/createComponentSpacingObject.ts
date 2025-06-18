import { startCase } from 'lodash-es';
import { FieldDefinition } from 'sanity';

/**
 * Creates a standardized spacing field for components
 *
 * @param name The name of the spacing property (e.g., 'marginTop')
 * @param options Configuration options including description and fieldset
 * @returns A field definition for the spacing property
 */
export function getComponentSpacingObject(
  name: string,
  options: { description: string; fieldset: string },
): FieldDefinition {
  return {
    name,
    title: startCase(name),
    description: options.description,
    fieldset: options.fieldset,
    type: 'string',
    options: {
      list: [
        { title: 'None', value: 'none' },
        { title: 'Small', value: 'small' },
        { title: 'Medium', value: 'medium' },
        { title: 'Large', value: 'large' },
      ],
      layout: 'radio',
    },
    initialValue: 'medium',
  };
}
