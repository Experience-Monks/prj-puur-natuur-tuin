import { Rule, SchemaValidationValue } from 'sanity';

/**
 * Validates that a string follows slug format (lowercase letters, numbers, and hyphens)
 * 
 * @param rule The Sanity validation rule
 * @returns A validation rule that checks for slug-like format
 */
export function isSlugLikeString(rule: Rule): SchemaValidationValue {
  return rule.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Must be a valid slug format (e.g., "my-slug")');
}
