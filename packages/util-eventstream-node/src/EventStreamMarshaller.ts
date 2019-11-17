import {
  EventStreamMarshaller as EventMarshaller,
  Message
} from "@aws-sdk/eventstream-marshaller";
import { Encoder, Decoder } from "@aws-sdk/types";
import { Readable } from "stream";

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
  serialize<T>(
    input: AsyncIterable<T>,
    serializer: (event: T) => Message
  ): Readable {
    //return Readable
  }
}

const gen: AsyncIterable<any> = {
  [Symbol.asyncIterator]: async function*() {
    yield "good";
  }
};
