import gsap from 'gsap';
import InertiaPlugin from 'gsap/InertiaPlugin';
import { useEffect, useRef, useState } from 'react';
import { useMount, useUnmount } from 'react-use';

/**
 * When running on a node environment the `window` is not available. Registering the Draggable
 * plugin will throw errors, therefore we create this little proxy method to import draggable
 * dynamically,
 */
export const getDraggable = async (): Promise<typeof Draggable | null> => {
  if (typeof window === 'undefined') {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { Draggable } = await import('gsap/Draggable');

  gsap.registerPlugin(Draggable, InertiaPlugin);

  return Draggable;
};

export function useDraggable(
  target: React.MutableRefObject<HTMLElement | null>,
  variables?: Draggable.Vars,
  bounds?: React.MutableRefObject<HTMLElement | null>,
  trigger?: React.MutableRefObject<HTMLElement | null>,
): Draggable | null {
  const [draggableInstance, setDraggableInstance] = useState<Draggable | null>(null);
  const onDragRef = useRef<gsap.Callback | undefined>();
  const onDragStartRef = useRef<gsap.Callback | undefined>();
  const onDragEndRef = useRef<gsap.Callback | undefined>();
  const onMoveRef = useRef<gsap.Callback | undefined>();
  const onPressRef = useRef<gsap.Callback | undefined>();
  const onPressInitRef = useRef<gsap.Callback | undefined>();
  const onReleaseRef = useRef<gsap.Callback | undefined>();
  const onThrowCompleteRef = useRef<gsap.Callback | undefined>();
  const onThrowUpdateRef = useRef<gsap.Callback | undefined>();
  const {
    onDrag,
    onDragStart,
    onDragEnd,
    onMove,
    onPress,
    onPressInit,
    onRelease,
    onThrowComplete,
    onThrowUpdate,
  } = variables ?? {};
  // Lets assign the key callbacks to the refs in order to be updated on change.
  useEffect(() => {
    onDragRef.current = onDrag;
    onDragStartRef.current = onDragStart;
    onDragEndRef.current = onDragEnd;
    onMoveRef.current = onMove;
    onPressRef.current = onPress;
    onPressInitRef.current = onPressInit;
    onReleaseRef.current = onRelease;
    onThrowCompleteRef.current = onThrowComplete;
    onThrowUpdateRef.current = onThrowUpdate;
  }, [
    onDrag,
    onDragStart,
    onDragEnd,
    onMove,
    onPress,
    onPressInit,
    onRelease,
    onThrowComplete,
    onThrowUpdate,
  ]);
  useMount(async () => {
    const draggable = await getDraggable();

    if (draggable && target.current) {
      const mergedVariables = variables ?? {};

      if (bounds?.current) {
        mergedVariables.bounds = bounds.current;
      }
      if (trigger?.current) {
        mergedVariables.trigger = trigger.current;
      }

      const [_draggableInstance] = draggable.create(target.current, {
        ...mergedVariables,
        onDrag() {
          onDragRef.current?.(this);
        },
        onDragStart() {
          onDragStartRef.current?.(this);
        },
        onDragEnd() {
          onDragEndRef.current?.(this);
        },
        onMove() {
          onMoveRef.current?.(this);
        },
        onPress() {
          onPressRef.current?.(this);
        },
        onPressInit() {
          onPressInitRef.current?.(this);
        },
        onRelease() {
          onReleaseRef.current?.(this);
        },
        onThrowUpdate() {
          onThrowUpdateRef.current?.(this);
        },
        onThrowComplete() {
          onThrowCompleteRef.current?.(this);
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (_draggableInstance !== undefined) {
        setDraggableInstance(_draggableInstance);
      }
    }
  });
  useUnmount(() => {
    if (draggableInstance) {
      draggableInstance.kill();
    }
  });

  return draggableInstance;
}
