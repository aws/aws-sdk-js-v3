/**
 * @internal
 *
 * A utility function converting ReadableStream into an async iterable.
 * Reference: https://jakearchibald.com/2017/async-iterators-and-generators/#making-streams-iterate
 */
export const readableToAsyncIterable = <T>(readableStream: ReadableStream<T>): AsyncIterable<T> => ({
  [Symbol.asyncIterator]: async function* () {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) return;
        yield value as T;
      }
    } finally {
      reader.releaseLock();
    }
  },
});
