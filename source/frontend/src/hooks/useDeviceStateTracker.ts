import { typedObjectKeys } from '@psimk/typed-object';
import { useState } from 'react';
import { useMount } from 'react-use';
import DeviceStateTracker, { DeviceStateEvent } from 'seng-device-state-tracker';
import type IDeviceStateData from 'seng-device-state-tracker/lib/IDeviceStateData';
import sharedVariables from '../data/shared-variables/shared-variables.internal.json';
import { useIsFirstRender } from './useIsFirstRender';

const cleanMediaQueries = {} as typeof sharedVariables.mediaQueries;
for (const key of typedObjectKeys(sharedVariables.mediaQueries)) {
  cleanMediaQueries[key] = sharedVariables.mediaQueries[key].replaceAll("'", '');
}

let deviceStateTracker: DeviceStateTracker | null = null;

export type DeviceState = IDeviceStateData['state'];
export type DeviceStateName = IDeviceStateData['name'];

/**
 * This hook can be used to access the active device state
 *
 * Example:
 * ```ts
 * const { state, name } = useDeviceStateTracker();
 * ```
 */
export const useDeviceStateTracker = (): {
  state: DeviceState;
  name: DeviceStateName;
} => {
  const isFirstRender = useIsFirstRender();

  const [activeDeviceState, setActiveDeviceState] = useState<IDeviceStateData>({
    state: isFirstRender ? 0 : (deviceStateTracker?.currentDeviceState.state ?? 0),
    name: '',
  });

  const onDeviceStateChange = (event: unknown): void => {
    const { data } = event as DeviceStateEvent;

    setActiveDeviceState({
      ...data,
    });
  };

  useMount(() => {
    if (deviceStateTracker === null) {
      deviceStateTracker = new DeviceStateTracker({
        deviceState: sharedVariables.deviceState,
        mediaQueries: cleanMediaQueries,
        showStateIndicator: process.env.NODE_ENV === 'development',
      });
    }

    deviceStateTracker.addEventListener(DeviceStateEvent.STATE_UPDATE, onDeviceStateChange);

    setActiveDeviceState({
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      state: deviceStateTracker.currentDeviceState.state ?? 0,
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      name: deviceStateTracker.currentDeviceState.name ?? '',
    });

    return () => {
      deviceStateTracker?.removeEventListener(DeviceStateEvent.STATE_UPDATE, onDeviceStateChange);
    };
  });

  return activeDeviceState;
};
