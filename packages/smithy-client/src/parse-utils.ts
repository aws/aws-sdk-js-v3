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
 * @returns The value if it is a boolean, otherwise an error is thrown.
 */
export function expectBoolean(value: any): boolean {
  if (typeof value === "boolean") {
    return value;
  }
  throw new TypeError(`Expected boolean, got ${typeof value}`);
}

/**
 * Asserts a value is a number and returns it.
 *
 * @param value A value that is expected to be a number.
 * @returns The value if it is a number, otherwise an error is thrown.
 */
export function expectNumber(value: any): number {
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError(`Expected number, got ${typeof value}`);
}

/**
 * Asserts a value is a string and returns it.
 *
 * @param value A value that is expected to be a string.
 * @returns The value if it is a string, otherwise an error is thrown.
 */
export function expectString(value: any): string {
  if (typeof value === "string") {
    return value;
  }
  throw new TypeError(`Expected string, got ${typeof value}`);
}
