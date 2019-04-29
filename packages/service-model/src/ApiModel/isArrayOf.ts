/**
 * @internal
 */
export interface Determiner<T> {
  (arg: any): arg is T;
}

/**
 * @internal
 */
export function isArrayOf<T>(
  arg: any,
  determiner: Determiner<T>
): arg is Array<T> {
  return (
    Array.isArray(arg) &&
    arg.map(determiner).filter(isInstance => !isInstance).length === 0
  );
}
