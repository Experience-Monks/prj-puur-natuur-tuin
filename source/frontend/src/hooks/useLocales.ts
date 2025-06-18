import { useLocaleContext } from '../providers/locale-provider/LocaleProvider';

export function useLocales(): Array<string> {
  return useLocaleContext().locales;
}
