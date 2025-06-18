import { type MutableRefs, useRefs, validateAndUnwrapRefs } from '@mediamonks/react-kit';
import { useRouter } from 'next/router';
import { type ReactElement } from 'react';
import { useMount } from 'react-use';
import { Route } from '../../../data/enums/Route';
import { useWebGl } from '../../../hooks/useWebGl';
import WebGLTextureConfig from '../../../webgl/WebGLTextureConfig';
import styles from './CanvasContainer.module.scss';

export type CanvasContainerRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

// eslint-disable-next-line @typescript-eslint/ban-types
type CanvasContainerProps = {
  onInitComplete?(): void;
};

// eslint-disable-next-line no-empty-pattern
function CanvasContainer({ onInitComplete }: CanvasContainerProps): ReactElement {
  const refs = useRefs<CanvasContainerRefs>();
  const webgl = useWebGl();
  const { pathname } = useRouter();

  useMount(async () => {
    const [isValid, unwrappedRefs] = validateAndUnwrapRefs(refs);

    if (!isValid) {
      return;
    }

    const webpSupported = await WebGLTextureConfig.checkWebpSupported();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    webgl.init(unwrappedRefs.self, pathname === Route.WebGl, webpSupported);

    onInitComplete?.();
  });

  return <div className={styles.canvasContainer} ref={refs.self} />;
}

export default CanvasContainer;
