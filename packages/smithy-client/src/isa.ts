/**
 * Checks if the given value is a Smithy structure of the given type.
 */
export function isa<T>(o: any, ...ids: string[]): o is T {
  return (
    typeof o === "object" &&
    // Checks for name after __type, as name is used instead for errors.
    (("__type" in o && ids.indexOf(o["__type"]) > -1) || ("name" in o && ids.indexOf(o["name"]) > -1))
  );
}
