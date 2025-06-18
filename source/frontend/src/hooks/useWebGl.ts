import WebGLApplication from '../webgl/WebGLApplication';

let webGl: WebGLApplication | null = null;

/**
 * This hook can be used to access the webgl application
 *
 * Example:
 * ```ts
 * const webGl = useWebGl();
 * ```
 */
export const useWebGl = (): WebGLApplication => {
  if (webGl === null) {
    webGl = new WebGLApplication();
  }

  return webGl;
};
