import { useLocaleContext } from '../providers/locale-provider/LocaleProvider';

export function useLocale(): string {
  return useLocaleContext().locale;
}
