declare module '*.txt?raw' {
  const exp: string;
  export default exp;
}

declare module '*.glsl?raw' {
  const exp: string;
  export default exp;
}

declare module '*.png' {
  const exp: string;
  export default exp;
}

declare module '*.jpg' {
  const exp: string;
  export default exp;
}

declare module '*.mp3' {
  const exp: string;
  export default exp;
}

declare module '*.wav' {
  const exp: string;
  export default exp;
}

declare module '*.json' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const exp: Array<any> | Record<string, any>;
  export default exp;
}

declare module '*.txt' {
  const exp: string;
  export default exp;
}

declare module 'file-loader!*' {
  const exp: string;
  export default exp;
}

declare module '*.glsl' {
  const exp: string;
  export default exp;
}

declare module '*.fs' {
  const exp: string;
  export default exp;
}

declare module '*.vs' {
  const exp: string;
  export default exp;
}

declare module '*.dds' {
  const exp: string;
  export default exp;
}

declare module '*.obj' {
  const exp: string;
  export default exp;
}

declare module '*.mp4' {
  const exp: string;
  export default exp;
}

declare module '*.worker.js' {
  class WebpackWorker extends Worker {
    public constructor();
  }
  export default WebpackWorker;
}

declare module '*.mtl' {
  const exp: string;
  export default exp;
}

declare module 'single-example';
declare module '@rive-app/canvas/rive.wasm';

interface Window {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  AudioContext: typeof AudioContext;
  webkitAudioContext: typeof AudioContext;
}
