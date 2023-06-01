import { Readable } from "stream";

/**
 * @internal
 *
 * A utility function converting async iterable to a Readable
 */
export const asyncIterableToReadable = <T>(asyncIterable: AsyncIterable<T>): Readable => {
  return Readable.from(asyncIterable);
};
