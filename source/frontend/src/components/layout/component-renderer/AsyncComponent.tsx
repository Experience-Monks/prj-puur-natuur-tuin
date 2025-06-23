import { componentMap } from '../../../app/[[...slug]]/page.componentsMap';
import { type PageContentProps } from '../../../app/[[...slug]]/page.types';
import { ErrorBoundary } from '../../utils/ErrorBoundary/ErrorBoundary';

type AsyncComponentProps = {
  item: PageContentProps;
};

export const componentErrorStyles = {
  display: 'grid',
  inlineSize: '100%',
  blockSize: '100px',
  placeItems: 'center',
  background: 'red',
  fontSize: 'large',
  color: 'white',
  margin: '2px',
};

export function AsyncComponent({ item }: AsyncComponentProps): JSX.Element | null {
  // eslint-disable-next-line react/hook-use-state
  const Component = componentMap[item.type];

  if (!Component) {
    if (process.env.NODE_ENV === 'production') {
      return null;
    }

    return (
      <div style={componentErrorStyles}>{item.error ?? `Component not found: ${item.type}`}</div>
    );
  }

  return (
    <ErrorBoundary>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Component {...(item.data as any)} />
    </ErrorBoundary>
  );
}
