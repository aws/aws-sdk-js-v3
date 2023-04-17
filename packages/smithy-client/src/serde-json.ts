/**
 * @internal
 *
 * Maps an object through the default JSON serde behavior.
 * This means removing nullish fields and un-sparsifying lists.
 *
 * @param obj - to be checked.
 * @returns same object with default serde behavior applied.
 */
export const _json = (obj: any): any => {
  if (obj == null) {
    return {};
  }
  if (Array.isArray(obj)) {
    return obj.filter((_: any) => _ != null);
  }
  if (typeof obj === "object") {
    const target: any = {};
    for (const key of Object.keys(obj)) {
      if (obj[key] == null) {
        continue;
      }
      target[key] = _json(obj[key]);
    }
    return target;
  }
  return obj;
};
