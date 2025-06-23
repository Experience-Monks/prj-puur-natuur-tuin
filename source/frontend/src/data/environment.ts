/**
 * Returns the value of the NextJS basePath. This includes the locale on export.
 * The basePath is used in the router and in the webpack build.
 */
export const nextPublicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/**
 * Returns the root without the locale. This is basically the root of the multi
 * build we do on export. This should be used to load assets and to implement a locale selector.
 */
export const nextPublicRoot = process.env.NEXT_PUBLIC_ROOT ?? '';

/**
 * The process environment. Use "production" as a default
 */
export const nodeEnvironment =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  process.env.NODE_ENV ?? 'production';
