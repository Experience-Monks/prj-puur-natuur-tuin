import { type MutableRefs, useRefs } from '@mediamonks/react-kit';
import { type ReactElement } from 'react';
import { useSitePreloader } from './SitePreloader.hooks';
import styles from './SitePreloader.module.scss';

type SitePreloaderProps = {
  shouldLoad: boolean;

  // Callback to be called before the transitionOut is completed but everything is loaded
  onPreloadComplete?(): void;

  // Callback to be called when loading and the transitionOut are completed
  onPreloadTransitionOutComplete?(): void;
};

export type SitePreloaderRefs = MutableRefs<{
  self: HTMLDivElement;
}>;

function SitePreloader({
  onPreloadComplete,
  onPreloadTransitionOutComplete,
  shouldLoad,
}: SitePreloaderProps): ReactElement {
  const refs = useRefs<SitePreloaderRefs>();

  const { fullProgress } = useSitePreloader(
    refs,
    shouldLoad,
    onPreloadComplete,
    onPreloadTransitionOutComplete,
  );

  return (
    <div className={styles.sitePreloader} ref={refs.self}>
      Loading Progress: {fullProgress}
    </div>
  );
}

export default SitePreloader;
