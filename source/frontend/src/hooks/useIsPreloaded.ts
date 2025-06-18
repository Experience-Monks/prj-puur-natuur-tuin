import { useRecoilValue } from 'recoil';
import { isPreloadedState } from '../stores/app.store';

export function useIsPreloaded(): boolean {
  return useRecoilValue(isPreloadedState);
}
