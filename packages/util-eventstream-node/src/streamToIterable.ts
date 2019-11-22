import { Readable } from "stream";
/**
 * Convert object stream piped in into an async iterable. This
 * daptor should be deprecated when Node stream iterator is stable.
 * Caveat: this adaptor won't have backpressure to inwards stream
 *
 * Reference: https://nodejs.org/docs/latest-v11.x/api/stream.html#stream_readable_symbol_asynciterator
 */

export async function* ReadabletoIterable<T>(
  readStream: Readable
): AsyncIterable<T> {
  let streamEnded = false;
  let generationEnded = false;
  const records = new Array<T>();

  readStream.on("error", err => {
    if (!streamEnded) {
      streamEnded = true;
    }
    if (err) {
      throw err;
    }
  });

  readStream.on("data", data => {
    records.push(data);
  });

  readStream.on("end", () => {
    streamEnded = true;
  });

  while (!generationEnded) {
    const value = await new Promise<T>(resolve =>
      setTimeout(() => resolve(records.shift()), 0)
    );
    if (value) {
      yield value;
    }
    generationEnded = streamEnded && records.length === 0;
  }
}

// ;(Symbol as any).asyncIterator =
//   Symbol.asyncIterator || Symbol.for('Symbol.asyncIterator')

// export class ResponseEventAdaptorStream extends Writable {
//   private eventBuffer: Array<Message | Symbol> = [];
//   private readonly eventDeserializer: (msg: any) => any;
//   private readonly eventEmitter: EventEmitter = new EventEmitter();
//   private readonly endToken = Symbol("done");
//   private terminated = false;
//   constructor(
//     options: WritableOptions & { eventDeserializer: (msg: Message) => any }
//   ) {
//     super({
//       ...options,
//       objectMode: true
//     });
//     this.eventDeserializer = options.eventDeserializer;
//   }

//   _write(chunk: any, _: string, callback: () => void) {
//     this.eventBuffer.push(chunk);
//     this.eventEmitter.emit("event");
//     callback();
//   }

//   _destroy(_: Error | null, callback: (error: Error | null) => void) {
//     this.endEventStream();
//     this.terminated = true;
//     this.eventEmitter.emit("destroy");
//     callback(null);
//   }

//   getIterable(): AsyncIterable<any> {
//     const self = this;
//     return {
//       [Symbol.asyncIterator]: async function*() {
//         while (!self.terminated) {
//           if (self.eventBuffer.length === 0) {
//             await self.waitForEvent("event", "destroy");
//           }
//           while (self.eventBuffer.length) {
//             const item = self.eventBuffer.shift();
//             if (item !== self.endToken) {
//               yield self.eventDeserializer(item);
//             } else {
//               self.destroy();
//               return;
//             }
//           }
//         }
//       }
//     };
//   }

//   private endEventStream(): void {
//     this._write(this.endToken, null as any, () => {});
//   }

//   private waitForEvent(...events: Array<string>): Promise<void> {
//     const;
//     return new Promise(resolve => this.eventEmitter.once("event", resolve));
//   }
// }
