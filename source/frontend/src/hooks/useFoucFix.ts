import { useEffect } from 'react';

interface MutationRecordWithTarget<T extends Node> extends MutationRecord {
  target: T;
}

// Temporary fix to avoid flash of unstyled content (FOUC) during route transitions.
// Keep an eye on this issue and remove this code when resolved: https://github.com/vercel/next.js/issues/17464
export function useFoucFix(): void {
  useEffect(() => {
    // Gather all server-side rendered stylesheet entries.
    let ssrPageStyleSheetsEntries = [
      ...document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"][data-n-p]'),
    ].map((element) => ({
      element,
      href: element.getAttribute('href'),
    }));

    // Remove the `data-n-p` attribute to prevent Next.js from removing it early.
    for (const { element } of ssrPageStyleSheetsEntries) {
      delete element.dataset.nP;
    }

    const fixedStyleHrefs: Array<string> = [];

    function mutationHandler(mutations: ReadonlyArray<MutationRecord>): void {
      // Gather all <style data-n-href="/..."> elements.
      const newStyleEntries = mutations
        .filter(
          (mutationRecord): mutationRecord is MutationRecordWithTarget<HTMLStyleElement> =>
            mutationRecord.target.nodeName === 'STYLE' &&
            Object.hasOwn((mutationRecord.target as HTMLStyleElement).dataset, 'nHref'),
        )
        .map(({ target }) => ({
          element: target,
          href: target.dataset.nHref,
        }));

      // Cycle through them and either:
      // - Remove the `data-n-href` attribute to prevent Next.js from removing it early.
      // - Remove the element if it's already present.
      for (const { element, href } of newStyleEntries) {
        if (href === undefined) {
          continue;
        }

        const styleExists = fixedStyleHrefs.includes(href);

        if (styleExists) {
          element.remove();
        } else {
          element.dataset.foucFixNHref = href;

          delete element.dataset.nHref;

          fixedStyleHrefs.push(href);
        }
      }

      // Cycle through the server-side rendered stylesheets and remove the ones that
      // are already present as inline <style> tags added by Next.js, so that we don't have duplicate styles.
      ssrPageStyleSheetsEntries = [];

      for (const entry of ssrPageStyleSheetsEntries) {
        const { element, href } = entry;

        if (href === null) {
          continue;
        }

        const styleExists = fixedStyleHrefs.includes(href);

        if (styleExists) {
          element.remove();
          continue;
        }

        ssrPageStyleSheetsEntries.push(entry);
      }
    }

    const observer = new MutationObserver(mutationHandler);

    observer.observe(document.head, {
      subtree: true,
      attributeFilter: ['media'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useFoucFix;
