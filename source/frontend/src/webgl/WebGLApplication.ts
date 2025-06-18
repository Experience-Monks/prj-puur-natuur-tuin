import EventDispatcher from 'seng-event';
import gsap from 'gsap';
// import WebGLTextureConfig from './WebGLTextureConfig';
// import WebGLController from './WebGLController';
// import WebGLPreLoader from './lib/renderer/core/WebGLPreLoader';
// import LogGL from "./lib/renderer/core/LogGL";

export default class WebGLApplication extends EventDispatcher {
  // private static webglApp: WebGLController;
  // private static preloader: WebGLPreLoader;

  public init(
    canvasWrapper: HTMLElement,
    uiVisible: boolean = false,
    webpSupported: boolean = false,
  ): void {
    // if (!WebGLApplication.webglApp) {
    //   LogGL.ENABLED = uiVisible;
    //   WebGLTextureConfig.useWebp = webpSupported;
    //   WebGLApplication.preloader = new WebGLPreLoader();
    //   WebGLApplication.webglApp = new WebGLController(canvasWrapper, WebGLApplication.preloader, uiVisible);
    // }
  }

  public load(onComplete: () => void, onProgress: (p: number) => void = () => {}): void {
    // WebGLApplication.preloader.load(() => {
    //   WebGLApplication.webglApp.init();
    //   onComplete();
    // }, onProgress);

    // TODO: REMOVE THIS LINE WHEN ADDING WEBGL!!!!
    const progress = { x: 0 };
    gsap.to(progress, {
      x: 1,
      duration: Number(process.env.NEXT_PUBLIC_MINIMUM_PRELOADER_DURATION ?? 0.5),
      ease: 'none',
      onUpdate: () => onProgress(progress.x),
      onComplete: onComplete,
    });
  }

  public play() {
    // WebGLApplication.webglApp.play();
  }

  public pause() {
    // WebGLApplication.webglApp.pause();
  }

  public destruct() {
    // WebGLApplication.webglApp.destruct();
  }
}
