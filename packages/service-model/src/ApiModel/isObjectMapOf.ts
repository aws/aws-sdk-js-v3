/**
 * @internal
 */
export interface Determiner<T> {
  (arg: any): arg is T;
}

/**
 * @internal
 */
export function isObjectMapOf<T>(
  arg: any,
  determiner: Determiner<T>
): arg is { [key: string]: T } {
  if (typeof arg !== "object" || arg === null) {
    return false;
  }

  for (let key in arg) {
    if (arg.hasOwnProperty(key) && !determiner(arg[key])) return false;
  }

  return true;
}
