import riveWasmUrl from '@rive-app/canvas/rive.wasm';
import { RuntimeLoader } from '@rive-app/react-canvas';
import { isRiveIncluded } from '../utils/rive.utils';

export function initRive(): void {
  if (typeof window === 'undefined' || !isRiveIncluded) {
    return;
  }
  RuntimeLoader.setWasmUrl(riveWasmUrl);
}
