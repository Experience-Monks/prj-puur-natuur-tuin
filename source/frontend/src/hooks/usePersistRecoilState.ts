import { useMount } from '@mediamonks/react-kit';
import { useUpdateEffect } from 'react-use';
import { type RecoilState, useRecoilState } from 'recoil';

export const usePersistRecoilState = <T>(state: RecoilState<T>): void => {
  const [value, setValue] = useRecoilState(state);

  useUpdateEffect(() => {
    localStorage.setItem(state.key, JSON.stringify(value));
  });

  useMount(() => {
    const storedValue = localStorage.getItem(state.key);

    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  });
};
