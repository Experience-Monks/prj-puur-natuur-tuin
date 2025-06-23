import { uniqueId } from 'lodash-es';
import { type ReactElement, type ReactNode, useId } from 'react';
import { type PageContentProps } from '../../../app/[[...slug]]/page.types';
import { AsyncComponent } from './AsyncComponent';

export type ComponentRendererProps = {
  content: Array<PageContentProps>;
  navigation?: Array<PageContentProps>;
  footer?: Array<PageContentProps>;
  contentFallback?: ReactNode;
};

export function ComponentRenderer({
  content,
  navigation,
  footer,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  contentFallback: ContentFallback,
}: ComponentRendererProps): ReactElement | null {
  const id = useId();

  return (
    <>
      {navigation?.at(0) && <AsyncComponent item={navigation.at(0)!} />}
      <main id="content">
        {content.map((item) => (
          <AsyncComponent key={uniqueId(`${id}:${item.id ?? Date.now()}`)} item={item} />
        ))}
        {content.length === 0 && ContentFallback}
      </main>
      {footer?.at(0) && <AsyncComponent item={footer.at(0)!} />}
    </>
  );
}
