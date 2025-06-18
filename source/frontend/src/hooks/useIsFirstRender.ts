import { useEffect } from 'react';

let isFirstRender = true;

export function useIsFirstRender(): boolean {
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
    }
  }, []);

  return isFirstRender;
}
