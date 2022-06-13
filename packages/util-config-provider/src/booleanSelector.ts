export enum SelectorType {
  ENV = "env",
  CONFIG = "shared config entry",
}

/**
 * Returns boolean value true/false for string value "true"/"false",
 * if the string is defined in obj[key]
 * Returns undefined, if obj[key] is not defined.
 * Throws error for all other cases.
 *
 * @internal
 */
export const booleanSelector = (obj: Record<string, string | undefined>, key: string, type: SelectorType) => {
  if (!(key in obj)) return undefined;
  if (obj[key] === "true") return true;
  if (obj[key] === "false") return false;
  throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};
