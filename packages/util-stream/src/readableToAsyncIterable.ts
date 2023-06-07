import { Readable } from "stream";

/**
 * @internal
 *
 * Convert object stream piped in into an async iterable. This
 * adaptor should be deprecated when Node stream iterator is stable.
 * Caveat: this adaptor won't have backpressure to inwards stream
 *
 * Reference: https://nodejs.org/docs/latest-v11.x/api/stream.html#stream_readable_symbol_asynciterator
 */
export async function* readableToAsyncIterable<T>(readStream: Readable): AsyncIterable<T> {
  let streamEnded = false;
  let generationEnded = false;
  const records: T[] = [];

  readStream.on("error", (err) => {
    if (!streamEnded) {
      streamEnded = true;
    }
    if (err) {
      throw err;
    }
  });

  readStream.on("data", (data) => {
    records.push(data);
  });

  readStream.on("end", () => {
    streamEnded = true;
  });

  while (!generationEnded) {
    // Wait one event loop before yielding the next value.
    await 0;
    const value = records.shift();
    if (value) {
      yield value;
    }
    generationEnded = streamEnded && records.length === 0;
  }
}
