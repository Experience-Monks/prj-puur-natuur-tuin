import { useEffect, useState } from 'react';
import { useIsPreloaded } from './useIsPreloaded';

export function useAfterPreloadState(): boolean {
  const isPreloaded = useIsPreloaded();
  const [isAfterPreload, setIsAfterPreload] = useState(isPreloaded);

  useEffect(() => {
    if (isPreloaded) {
      setIsAfterPreload(true);
    }
  }, [isPreloaded]);

  return isAfterPreload;
}
