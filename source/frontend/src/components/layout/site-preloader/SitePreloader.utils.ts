import { type Channels } from '@mediamonks/channels';
import { LoadImageTask } from '@mediamonks/task-loader';
import type AbstractLoadTask from '@mediamonks/task-loader/lib/task/AbstractLoadTask';
import { gsap } from 'gsap';
import LoadMethodTask from '../../../preloader/util/task-loader/LoadMethodTask';
import LoadSoundMethodTask from '../../../preloader/util/task-loader/LoadSoundMethodTask';
import type WebGLApplication from '../../../webgl/WebGLApplication';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LoadTaskArray = Array<AbstractLoadTask<any>>;

export const loadAudioAssets = (tasks: LoadTaskArray, channels: Channels | null): void => {
  if (channels) {
    tasks.push(
      new LoadSoundMethodTask({
        loadMethod: channels.loadSounds.bind(channels),
      }),
    );
  }
};

export const loadWebGl = (tasks: LoadTaskArray, webgl: WebGLApplication): void => {
  tasks.push(
    new LoadMethodTask({
      loadMethod: webgl.load.bind(webgl),
    }),
  );
};

export const loadImages = (tasks: LoadTaskArray, assets: Array<string>): void => {
  tasks.push(
    new LoadImageTask({
      assets,
    }),
  );
};

export const manualProgressTween = (
  duration: number,
  onUpdate: (progress: number) => void,
): Promise<void> =>
  new Promise((resolve) => {
    const tweenData = { x: 0 };
    gsap.to(tweenData, {
      duration,
      onUpdate: () => {
        onUpdate(tweenData.x);
      },
      x: 1,
      ease: 'none',
      onComplete: resolve,
    });
  });
