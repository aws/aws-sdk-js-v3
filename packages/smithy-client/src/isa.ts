/**
 * Checks if the given value is a Smithy structure of the given type.
 */
export function isa<T>(o: any, ...ids: string[]): o is T {
  return (
    typeof o === "object" && "__type" in o && ids.indexOf(o["__type"]) > -1
  );
}
