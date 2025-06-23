// eslint-disable-next-line @typescript-eslint/naming-convention
import _debug from 'debug';
import { isNone } from 'isntnt';
import { nodeEnvironment } from '../data/environment';

const isProduction = nodeEnvironment === 'production';

const rootNamespace = 'frontend';
const debug = _debug(rootNamespace);

if (
  !isProduction &&
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  isNone(globalThis.localStorage?.getItem('debug'))
) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  globalThis.localStorage?.setItem('debug', `${debug.namespace}:*`);
}

globalThis.cnsl = Object.assign((namespace: string): DebugLogger => extend(namespace), {
  ...extend(),
});

export function extend(namespace?: string): DebugLogger {
  const instance = namespace ? debug.extend(namespace) : debug;

  const log = instance.extend('log');
  // eslint-disable-next-line no-console
  log.log = console.log.bind(console);

  const warn = instance.extend('warn');
  // eslint-disable-next-line no-console
  warn.log = console.warn.bind(console);

  const info = instance.extend('info');
  // eslint-disable-next-line no-console
  info.log = console.info.bind(console);

  const error = instance.extend('error');
  // eslint-disable-next-line no-console
  error.log = console.error.bind(console);

  // Error should be enabled on all environments
  error.enabled = true;

  return {
    log,
    warn,
    info,
    error,
  };
}
