import { atom } from 'recoil';

export const volumeState = atom({
  key: 'volumeState',
  default: 1,
});

export const isPreloadedState = atom({
  key: 'isPreloadedState',
  default: false,
});
