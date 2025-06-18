import { isEqual } from 'lodash-es';
import { useMemo, useRef } from 'react';

/**
 * useStableValue - A custom React hook that memoizes a value with deep comparison.
 *
 * This hook checks if the provided value has changed using a deep comparison.
 * If the value has changed, it updates the memoized value; otherwise, it returns
 * the previously memoized value. This is useful for optimizing performance
 * when passing complex objects or arrays as props to components.
 *
 * @param {T} value    - The value to be memoized. This can be any type, including
 *                       primitive values, objects, or arrays.
 * @returns {T | null} - The memoized value. Returns null if the initial value
 *                       is not provided.
 *
 * @example
 * const complexObject = { key: 'value', nested: { key: 'nestedValue' } };
 * const stableObject = useStableValue(complexObject);
 */
export function useStableValue<T>(value: T): T {
  const valueRef = useRef<T | null>(null);
  return useMemo(() => {
    if (!valueRef.current || !isEqual(valueRef.current, value)) {
      valueRef.current = value;
    }

    return valueRef.current;
  }, [value]);
}
