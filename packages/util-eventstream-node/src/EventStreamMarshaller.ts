import {
  EventStreamMarshaller as EventMarshaller,
  Message
} from "@aws-sdk/eventstream-marshaller";
import { Encoder, Decoder } from "@aws-sdk/types";
import { Readable, PassThrough } from "stream";

export class EventStreamMarshaller {
  private readonly eventMarshaller: EventMarshaller;
  constructor(toUtf8: Encoder, fromUtf8: Decoder) {
    this.eventMarshaller = new EventMarshaller(toUtf8, fromUtf8);
  }
  deserialize<T>(
    body: Readable,
    deserializers: (message: Message) => T
  ): AsyncIterable<T> {
    //frame the body
    //call EventMarshaller to deserialize each event
    //return an async generator
  }
  async serialize<T>(
    input: AsyncIterable<T>,
    serializer: (event: T) => Message
  ): Promise<Readable> {
    const stream = new PassThrough();
    for await (const event of input) {
      const serialized = this.eventMarshaller.marshall(serializer(event));
      stream.write(serialized);
    }
    return stream;
  }
}

const gen: AsyncIterable<any> = {
  [Symbol.asyncIterator]: async function*() {
    yield "good";
  }
};
