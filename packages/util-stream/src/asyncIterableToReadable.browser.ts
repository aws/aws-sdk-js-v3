/**
 * @internal
 *
 * A utility function converting async iterable to a ReadableStream.
 */
export const asyncIterableToReadable = <T>(asyncIterable: AsyncIterable<T>): ReadableStream<T> => {
  const iterator = asyncIterable[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await iterator.next();
      if (done) {
        return controller.close();
      }
      controller.enqueue(value);
    },
  });
};
