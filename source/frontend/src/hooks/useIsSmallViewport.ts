import { useDeviceStateTracker } from './useDeviceStateTracker';
import { useSharedVariables } from './useSharedVariables';

export function useIsSmallViewport(): boolean {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { deviceState: DeviceState } = useSharedVariables();
  const { state: deviceState } = useDeviceStateTracker();

  return deviceState < DeviceState.MEDIUM;
}
