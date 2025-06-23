import { isArray, isObject, type Predicate, type Serializable } from 'isntnt';

export function deepOmitUndefined<Value extends Serializable>(value: Value): Value {
  // eslint-disable-next-line eqeqeq
  if (value == null) {
    return value;
  }

  if ((isArray as Predicate<Array<unknown> | ReadonlyArray<unknown>>)(value)) {
    const filteredValue = [];

    for (const element of value as ReadonlyArray<Serializable>) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (element === undefined) {
        continue;
      }

      filteredValue.push(deepOmitUndefined(element));
    }

    return filteredValue as Value;
  }

  if (isObject(value)) {
    const filteredValue: Record<PropertyKey, unknown> = {};

    for (const key in value as Record<string, Serializable>) {
      if (!Object.hasOwn(value, key)) {
        continue;
      }

      const property = value[key];
      if (property === undefined) {
        continue;
      }

      filteredValue[key] = deepOmitUndefined(property);
    }

    return filteredValue as Value;
  }

  return value;
}
