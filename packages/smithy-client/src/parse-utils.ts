/**
 * Give an input string, strictly parses a boolean value.
 *
 * @param value The boolean string to parse.
 * @returns true for "true", false for "false", otherwise an error is thrown.
 */
export const parseBoolean = (value: string): boolean => {
  switch (value) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      throw new Error(`Unable to parse boolean value "${value}"`);
  }
};

/*
 * Asserts a value is a boolean and returns it.
 *
 * @param value A value that is expected to be a boolean.
 * @returns The value if it's a boolean, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export const expectBoolean = (value: any): boolean | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value === "boolean") {
    return value;
  }
  throw new TypeError(`Expected boolean, got ${typeof value}`);
};

/**
 * Asserts a value is a number and returns it.
 *
 * @param value A value that is expected to be a number.
 * @returns The value if it's a number, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export const expectNumber = (value: any): number | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError(`Expected number, got ${typeof value}`);
};

/**
 * Asserts a value is a string and returns it.
 *
 * @param value A value that is expected to be a string.
 * @returns The value if it's a string, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export const expectString = (value: any): string | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value === "string") {
    return value;
  }
  throw new TypeError(`Expected string, got ${typeof value}`);
};

/**
 * Asserts a value is a number and returns it, and also converts string
 * representations of non-numeric floats into Numbers.
 *
 * @param value A number or string representation of a non-numeric float.
 * @returns The value as a number, undefined if it's null/undefined,
 *     otherwise an error is thrown.
 */
export const handleFloat = (value: string | number): number | undefined => {
  if (typeof value == "string") {
    switch (value) {
      case "NaN":
        return NaN;
      case "Infinity":
        return Infinity;
      case "-Infinity":
        return -Infinity;
      default:
        throw new Error(`Unable to parse float value: ${value}`);
    }
  }
  return expectNumber(value);
};
