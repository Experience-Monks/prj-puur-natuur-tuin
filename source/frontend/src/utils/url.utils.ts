/**
 * Returns the value of the NextJS basePath. This includes the locale on export.
 * The basePath is used in the router and in the webpack build.
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? '';
}

/**
 * Returns the root without the locale. This is basically the root of the multi
 * build we do on export. This should be used to load assets and to implement a locale selector.
 */
export function getRoot(): string {
  return process.env.NEXT_PUBLIC_ROOT ?? '';
}
