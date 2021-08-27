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
 * Asserts a value is an integer and returns it.
 *
 * @param value A value that is expected to be an integer.
 * @returns The value if it's an integer, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export const expectInt = (value: any): number | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (Number.isInteger(value) && !Number.isNaN(value)) {
    return value;
  }
  throw new TypeError(`Expected integer, got ${typeof value}`);
};

/**
 * Asserts a value is not null or undefined and returns it, or throws an error.
 *
 * @param value A value that is expected to be defined
 * @param location The location where we're expecting to find a defined object (optional)
 * @returns The value if it's not undefined, otherwise throws an error
 */
export const expectNonNull = <T>(value: T | null | undefined, location?: string): T => {
  if (value === null || value === undefined) {
    if (location) {
      throw new TypeError(`Expected a non-null value for ${location}`);
    }
    throw new TypeError("Expected a non-null value");
  }
  return value;
};

/**
 * Asserts a value is an JSON-like object and returns it. This is expected to be used
 * with values parsed from JSON (arrays, objects, numbers, strings, booleans).
 *
 * @param value A value that is expected to be an object
 * @returns The value if it's an object, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export const expectObject = (value: any): { [key: string]: any } | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value === "object" && !Array.isArray(value)) {
    return value;
  }
  throw new TypeError(`Expected object, got ${typeof value}`);
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
 * Parses a value into a float. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by the standard
 * parseFloat with one exception: NaN may only be explicitly set as the string
 * "NaN", any implicit Nan values will result in an error being thrown. If any
 * other type is provided, an exception will be thrown.
 *
 * @param value A number or string representation of a float.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export const strictParseFloat = (value: string | number): number | undefined => {
  if (value === "NaN") {
    return NaN;
  }
  if (typeof value == "string") {
    // TODO: handle underflow / overflow explicitly
    const parsed: number = parseFloat(value);
    if (Number.isNaN(parsed)) {
      throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return expectNumber(parsed);
  }
  return expectNumber(value);
};

/**
 * Asserts a value is a number and returns it. If the value is a string
 * representation of a non-numeric number type (NaN, Infinity, -Infinity),
 * the value will be parsed. Any other string value will result in an exception
 * being thrown. Null or undefined will be returned as undefined. Any other
 * type will result in an exception being thrown.
 *
 * @param value A number or string representation of a non-numeric float.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export const limitedParseFloat = (value: string | number): number | undefined => {
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

/**
 * @deprecated Use limitedParseFloat or strictParseFloat
 */
export const handleFloat = limitedParseFloat;

/**
 * Parses a value into an integer. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by parseFloat
 * and the result will be asserted to be an integer. If the parsed value is not
 * an integer, or the raw value is any type other than a string or number, an
 * exception will be thrown.
 *
 * @param value A number or string representation of an integer.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export const strictParseInt = (value: string | number): number | undefined => {
  if (typeof value === "string") {
    // parseInt can't be used here, because it will silently discard any
    // existing decimals. We want to instead throw an error if there are any.
    // TODO: handle underflow / overflow explicitly
    return expectInt(parseFloat(value));
  }
  return expectInt(value);
};
