'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals(): null {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useReportWebVitals((_metric) => {
    // You can send the metric to your analytics service
    // console.log(_metric);
  });

  return null;
}
