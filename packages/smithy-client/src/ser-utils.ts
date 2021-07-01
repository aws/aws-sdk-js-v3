/**
 * Serializes a number, turning non-numeric values into strings.
 *
 * @param value The number to serialize.
 * @returns A number, or a string if the given number was non-numeric.
 */
export const serializeFloat = (value: number): string | number => {
  // NaN is not equal to everything, including itself.
  if (value !== value) {
    return "NaN";
  }
  switch (value) {
    case Infinity:
      return "Infinity";
    case -Infinity:
      return "-Infinity";
    default:
      return value;
  }
};
