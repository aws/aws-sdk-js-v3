/**
 * Same to nullish coalescing operator(`??`). Used to safe code size of
 * JavaScript code.
 *
 * @internal
 */
export const nullishCoalescing = <T>(a: T | undefined | null, b: T) => (a !== null && a !== void 0 ? a : b);
