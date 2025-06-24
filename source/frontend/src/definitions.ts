import type { Debugger } from 'debug';

export type NextPageProps = {
  params: {
    slug?: Array<string>;
  };
  searchParams?: Record<string, string | Array<string>>;
};

declare global {
  type DebugLogger = {
    readonly log: Debugger;
    readonly info: Debugger;
    readonly warn: Debugger;
    readonly error: Debugger;
  };

  // eslint-disable-next-line no-var
  var cnsl: ((namespace: string) => DebugLogger) & DebugLogger;
}
