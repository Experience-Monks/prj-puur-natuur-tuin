import { useMemo } from 'react';
import { dutchMonths } from '../data/constants/dutchMonths';

// No need for DutchMonth | undefined typing on month!
export function useDutchDate(dateInput: string | Date): string {
  return useMemo(() => {
    const date = new Date(dateInput);
    if (Number.isNaN(date.getTime())) {
      return '';
    }
    const day = date.getDate();
    const month = dutchMonths[date.getMonth()];
    return `${day} ${month}`;
  }, [dateInput]);
}
