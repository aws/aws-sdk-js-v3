/**
 * Give an input string, stritctly parses a boolean value.
 *
 * @param value The boolean string to parse.
 * @returns true for "true", false for "false", otherwise an error is thrown.
 */
export function parseBoolean(value: "true" | "false"): boolean {
  switch (value) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      throw new Error(`Unable to parse boolean value "${value}"`);
  }
}
