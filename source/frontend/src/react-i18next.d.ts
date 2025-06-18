/* eslint-disable unicorn/filename-case */
import { type DefaultResources, type KeyPrefix, type TFuncKey } from 'react-i18next';
import type generalNamespace from './translations/en/general.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      general: typeof generalNamespace;
    };
  }
}
/**
 * A Type that can be used to type props, vars or function parameters to one of the available keys,
 * either from all of them, or from a particular resource/namespace, similar to how you would use
 * `useTranslation()` vs `useTranslation('general')`.
 *
 * ```ts
 * // you can provide any valid key here
 * const anyKey: TranslationKey = 'general:skeleton';
 * // so this works
 * const { t } = useTranslation();
 * t(anyKey);
 *
 * // you can only provide keys here that are in the general namespace
 * const generalKey: TranslationKey<'general'> = 'skeleton'
 * // so this works
 * const { t } = useTranslation('general');
 * t(generalKey);
 * ```
 */
export type TranslationKey<Namespace extends keyof DefaultResources | undefined = undefined> =
  Namespace extends keyof DefaultResources
    ? TFuncKey<Namespace, KeyPrefix<Namespace>>
    : TFuncKey<Array<keyof DefaultResources>>;
