import { useUnmount } from '@mediamonks/react-kit';
import { useAnimation } from '@mediamonks/react-kit/gsap';
import TaskLoader, { TaskLoaderEvent } from '@mediamonks/task-loader';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useWebGl } from '../../../hooks/useWebGl';
import { type SitePreloaderRefs } from './SitePreloader';
import { createInAnimation } from './SitePreloader.transitions';
import { type LoadTaskArray, loadWebGl, manualProgressTween } from './SitePreloader.utils';

// Used to Force faster Preloading on Development environments
const manualTweenDuration = Number(process.env.NEXT_PUBLIC_MINIMUM_PRELOADER_DURATION ?? 0.5);

export const useSitePreloader = (
  refs: SitePreloaderRefs,
  shouldLoad: boolean,
  onPreloadComplete?: () => void,
  onPreloadTransitionOutComplete?: () => void,
): {
  fullProgress: number;
  manualProgress: number;
  actualProgress: number;
} => {
  const [manualProgress, setManualProgress] = useState(0);
  const [actualProgress, setActualProgress] = useState(0);

  const webgl = useWebGl();
  // const channels = useChannels();

  const preloader = useRef<TaskLoader>();
  const fullProgress = Math.round(manualProgress * actualProgress * 100);
  const animation = useAnimation(() => createInAnimation(refs), [refs]);

  const onCompletePreloader = useCallback(async () => {
    await animation.current?.reverse();
    onPreloadTransitionOutComplete?.();
  }, [onPreloadTransitionOutComplete, animation]);

  useEffect(() => {
    if (shouldLoad) {
      (async (): Promise<void> => {
        const taskLoader = new TaskLoader();
        preloader.current = taskLoader;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        taskLoader.addEventListener(TaskLoaderEvent.UPDATE, (event: any) => {
          setActualProgress(event.data.progress);
        });

        await animation.current?.play(0);

        /*
         * We create the loading tasks here and adding them in an Array
         * TODO: Add actual loading tasks here
         * */
        const tasks: LoadTaskArray = [];
        loadWebGl(tasks, webgl);
        // loadAudioAssets(tasks, channels);

        // Set the actual progress to 1 if there are no loading tasks
        if (tasks.length === 0) {
          setActualProgress(1);
        }

        await Promise.all([
          taskLoader.loadTasks(tasks),
          manualProgressTween(manualTweenDuration, setManualProgress),
        ]);

        onPreloadComplete?.();
        await onCompletePreloader();
      })();
    }
  }, [onPreloadComplete, onCompletePreloader, shouldLoad, animation, webgl]);

  useUnmount(() => {
    preloader.current?.dispose();
  });

  return {
    fullProgress,
    manualProgress,
    actualProgress,
  };
};
