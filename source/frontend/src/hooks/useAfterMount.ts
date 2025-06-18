import { useState } from 'react';
import { useMount, useUpdateEffect } from 'react-use';

export const useAfterMount = (callback: () => void): void => {
  const [isMounted, setIsMounted] = useState(false);

  useUpdateEffect(() => {
    if (isMounted) {
      callback();
    }
  }, [isMounted]);

  useMount(() => {
    setIsMounted(true);
  });
};
