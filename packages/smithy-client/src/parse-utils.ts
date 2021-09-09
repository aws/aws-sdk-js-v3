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

const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));

/**
 * Asserts a value is a 32-bit float and returns it.
 *
 * @param value A value that is expected to be a 32-bit float.
 * @returns The value if it's a float, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export const expectFloat32 = (value: any): number | undefined => {
  const expected = expectNumber(value);
  if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
    // IEEE-754 is an imperfect representation for floats. Consider the simple
    // value `0.1`. The representation in a 32-bit float would look like:
    //
    // 0 01111011 10011001100110011001101
    // Actual value: 0.100000001490116119384765625
    //
    // Note the repeating pattern of `1001` in the fraction part. The 64-bit
    // representation is similar:
    //
    // 0 01111111011 1001100110011001100110011001100110011001100110011010
    // Actual value: 0.100000000000000005551115123126
    //
    // So even for what we consider simple numbers, the representation differs
    // between the two formats. And it's non-obvious how one might look at the
    // 64-bit value (which is how JS represents numbers) and determine if it
    // can be represented reasonably in the 32-bit form. Primarily because you
    // can't know whether the intent was to represent `0.1` or the actual
    // value in memory. But even if you have both the decimal value and the
    // double value, that still doesn't communicate the intended precision.
    //
    // So rather than attempting to divine the intent of the caller, we instead
    // do some simple bounds checking to make sure the value is passingly
    // representable in a 32-bit float. It's not perfect, but it's good enough.
    // Perfect, even if possible to achieve, would likely be too costly to
    // be worth it.
    //
    // The maximum value of a 32-bit float. Since the 64-bit representation
    // could be more or less, we just round it up to the nearest whole number.
    // This further reduces our ability to be certain of the value, but it's
    // an acceptable tradeoff.
    //
    // Compare against the absolute value to simplify things.
    if (Math.abs(expected) > MAX_FLOAT) {
      throw new TypeError(`Expected 32-bit float, got ${value}`);
    }
  }
  return expected;
};

/**
 * Asserts a value is an integer and returns it.
 *
 * @param value A value that is expected to be an integer.
 * @returns The value if it's an integer, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export const expectLong = (value: any): number | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (Number.isInteger(value) && !Number.isNaN(value)) {
    return value;
  }
  throw new TypeError(`Expected integer, got ${typeof value}`);
};

/**
 * @deprecated Use expectLong
 */
export const expectInt = expectLong;

/**
 * Asserts a value is a 32-bit integer and returns it.
 *
 * @param value A value that is expected to be an integer.
 * @returns The value if it's an integer, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export const expectInt32 = (value: any): number | undefined => expectSizedInt(value, 32);

/**
 * Asserts a value is a 16-bit integer and returns it.
 *
 * @param value A value that is expected to be an integer.
 * @returns The value if it's an integer, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export const expectShort = (value: any): number | undefined => expectSizedInt(value, 16);

/**
 * Asserts a value is an 8-bit integer and returns it.
 *
 * @param value A value that is expected to be an integer.
 * @returns The value if it's an integer, undefined if it's null/undefined,
 *   otherwise an error is thrown.
 */
export const expectByte = (value: any): number | undefined => expectSizedInt(value, 8);

type IntSize = 32 | 16 | 8;

const expectSizedInt = (value: any, size: IntSize): number | undefined => {
  const expected = expectLong(value);
  if (expected !== undefined && castInt(expected, size) !== expected) {
    throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
  }
  return expected;
};

const castInt = (value: number, size: IntSize) => {
  switch (size) {
    case 32:
      return Int32Array.of(value)[0];
    case 16:
      return Int16Array.of(value)[0];
    case 8:
      return Int8Array.of(value)[0];
  }
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
 * Asserts a value is a JSON-like object with only one non-null/non-undefined key and
 * returns it.
 *
 * @param value A value that is expected to be an object with exactly one non-null,
 *              non-undefined key.
 * @return the value if it's a union, undefined if it's null/undefined, otherwise
 *  an error is thrown.
 */
export const expectUnion = (value: unknown): { [key: string]: any } | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  const asObject = expectObject(value)!;

  const setKeys = Object.entries(asObject)
    .filter(([_, v]) => v !== null && v !== undefined)
    .map(([k, _]) => k);

  if (setKeys.length === 0) {
    throw new TypeError(`Unions must have exactly one non-null member`);
  }

  if (setKeys.length > 1) {
    throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
  }

  return asObject;
};

/**
 * Parses a value into a double. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by the standard
 * parseFloat with one exception: NaN may only be explicitly set as the string
 * "NaN", any implicit Nan values will result in an error being thrown. If any
 * other type is provided, an exception will be thrown.
 *
 * @param value A number or string representation of a double.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export const strictParseDouble = (value: string | number): number | undefined => {
  if (typeof value == "string") {
    return expectNumber(parseNumber(value));
  }
  return expectNumber(value);
};

/**
 * @deprecated Use strictParseDouble
 */
export const strictParseFloat = strictParseDouble;

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
export const strictParseFloat32 = (value: string | number): number | undefined => {
  if (typeof value == "string") {
    return expectFloat32(parseNumber(value));
  }
  return expectFloat32(value);
};

// This regex matches JSON-style numbers. In short:
// * The integral may start with a negative sign, but not a positive one
// * No leading 0 on the integral unless it's immediately followed by a '.'
// * Exponent indicated by a case-insensitive 'E' optionally followed by a
//   positive/negative sign and some number of digits.
// It also matches both positive and negative infinity as well and explicit NaN.
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;

const parseNumber = (value: string): number => {
  const matches = value.match(NUMBER_REGEX);
  if (matches === null || matches[0].length !== value.length) {
    throw new TypeError(`Expected real number, got implicit NaN`);
  }
  return parseFloat(value);
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
export const limitedParseDouble = (value: string | number): number | undefined => {
  if (typeof value == "string") {
    return parseFloatString(value);
  }
  return expectNumber(value);
};

/**
 * @deprecated Use limitedParseDouble
 */
export const handleFloat = limitedParseDouble;

/**
 * @deprecated Use limitedParseDouble
 */
export const limitedParseFloat = limitedParseDouble;

/**
 * Asserts a value is a 32-bit float and returns it. If the value is a string
 * representation of a non-numeric number type (NaN, Infinity, -Infinity),
 * the value will be parsed. Any other string value will result in an exception
 * being thrown. Null or undefined will be returned as undefined. Any other
 * type will result in an exception being thrown.
 *
 * @param value A number or string representation of a non-numeric float.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export const limitedParseFloat32 = (value: string | number): number | undefined => {
  if (typeof value == "string") {
    return parseFloatString(value);
  }
  return expectFloat32(value);
};

const parseFloatString = (value: string): number => {
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
};

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
export const strictParseLong = (value: string | number): number | undefined => {
  if (typeof value === "string") {
    // parseInt can't be used here, because it will silently discard any
    // existing decimals. We want to instead throw an error if there are any.
    return expectLong(parseNumber(value));
  }
  return expectLong(value);
};

/**
 * @deprecated Use strictParseLong
 */
export const strictParseInt = strictParseLong;

/**
 * Parses a value into a 32-bit integer. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by parseFloat
 * and the result will be asserted to be an integer. If the parsed value is not
 * an integer, or the raw value is any type other than a string or number, an
 * exception will be thrown.
 *
 * @param value A number or string representation of a 32-bit integer.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export const strictParseInt32 = (value: string | number): number | undefined => {
  if (typeof value === "string") {
    // parseInt can't be used here, because it will silently discard any
    // existing decimals. We want to instead throw an error if there are any.
    return expectInt32(parseNumber(value));
  }
  return expectInt32(value);
};

/**
 * Parses a value into a 16-bit integer. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by parseFloat
 * and the result will be asserted to be an integer. If the parsed value is not
 * an integer, or the raw value is any type other than a string or number, an
 * exception will be thrown.
 *
 * @param value A number or string representation of a 16-bit integer.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export const strictParseShort = (value: string | number): number | undefined => {
  if (typeof value === "string") {
    // parseInt can't be used here, because it will silently discard any
    // existing decimals. We want to instead throw an error if there are any.
    return expectShort(parseNumber(value));
  }
  return expectShort(value);
};

/**
 * Parses a value into an 8-bit integer. If the value is null or undefined, undefined
 * will be returned. If the value is a string, it will be parsed by parseFloat
 * and the result will be asserted to be an integer. If the parsed value is not
 * an integer, or the raw value is any type other than a string or number, an
 * exception will be thrown.
 *
 * @param value A number or string representation of an 8-bit integer.
 * @returns The value as a number, or undefined if it's null/undefined.
 */
export const strictParseByte = (value: string | number): number | undefined => {
  if (typeof value === "string") {
    // parseInt can't be used here, because it will silently discard any
    // existing decimals. We want to instead throw an error if there are any.
    return expectByte(parseNumber(value));
  }
  return expectByte(value);
};
