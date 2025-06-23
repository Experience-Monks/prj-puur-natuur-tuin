import { createFragment } from '../../../util/object-utils/createFragment';
import { Rule } from 'sanity';

// Define a type for the parent object to help TypeScript understand the structure
type ButtonParent = {
  link?: {
    linkType?: string;
  };
};

export default createFragment('button', {
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.custom((value, context) => {
          // Use type assertion to help TypeScript understand the structure
          const parent = context.parent as ButtonParent;

          // Only require text if a link type is selected
          if (parent?.link?.linkType && !value) {
            return 'Please enter button text';
          }
          return true;
        }),
    },
    {
      name: 'link',
      title: 'Button Link',
      type: 'linkFragment',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
});
