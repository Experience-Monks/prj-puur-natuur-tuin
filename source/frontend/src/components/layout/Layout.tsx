import { type MutableRefs, useRefs } from '@mediamonks/react-kit';
import { type PropsWithChildren, type ReactElement } from 'react';
import { EnableAnimationsProvider } from '../../providers/enable-animations-provider/EnableAnimationsProvider';
import { useLayoutInit, useSetVisibility } from './Layout.hooks';
import CanvasContainer from './canvas-container/CanvasContainer';
import SitePreloader from './site-preloader/SitePreloader';

export type LayoutRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

export function Layout({ children }: PropsWithChildren): ReactElement {
  const refs = useRefs<LayoutRefs>();
  const { isPreloaded, isWebGlInitComplete, onPreloadComplete, onWebGlInitComplete } =
    useLayoutInit();
  useSetVisibility(refs);

  return (
    <main ref={refs.self} style={{ opacity: 0 }}>
      <CanvasContainer onInitComplete={onWebGlInitComplete} />
      {!isPreloaded && (
        <SitePreloader
          shouldLoad={isWebGlInitComplete}
          onPreloadTransitionOutComplete={onPreloadComplete}
        />
      )}
      <EnableAnimationsProvider value={isPreloaded}>{children}</EnableAnimationsProvider>
    </main>
  );
}
