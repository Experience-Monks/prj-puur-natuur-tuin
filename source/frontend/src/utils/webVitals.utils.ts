import type { NextWebVitalsMetric } from 'next/dist/shared/lib/utils';

/**
 * @link https://web.dev/defining-core-web-vitals-thresholds/
 * @link https://web.dev/time-to-first-byte/
 */
const targets = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TTFB: {
    value: 600,
    copy: '≤ 600ms',
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FCP: {
    value: 1800,
    copy: '≤ 1800ms',
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  LCP: {
    value: 2500,
    copy: '≤ 2500ms',
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FID: {
    value: 100,
    copy: '≤ 100ms',
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CLS: {
    value: 0.1,
    copy: '≤ 0.1ms',
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  INP: {
    value: 200,
    copy: '≤ 200ms',
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TBT: {
    value: 200,
    copy: '≤ 200ms',
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TTI: {
    value: 5000,
    copy: '≤ 5000ms',
  },
};

const msLogPrecision = 0;

export function report({ name, label, value }: NextWebVitalsMetric): void {
  if (process.env.NEXT_PUBLIC_DEBUG_WEB_VITALS !== 'true') {
    return;
  }

  if (label !== 'web-vital') {
    // eslint-disable-next-line no-console
    console.log(`${name}: ${value.toFixed(msLogPrecision)}ms (duration)`);
    return;
  }

  let output = `%cCore Web Vital -> ${name}: ${value.toFixed(msLogPrecision)}ms`;
  output += ` - target: ${targets[name].copy}`;

  // eslint-disable-next-line no-console
  console.log(output, `color: ${value <= targets[name].value ? 'green' : 'red'}`);
}
