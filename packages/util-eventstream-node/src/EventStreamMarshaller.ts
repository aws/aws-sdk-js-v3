import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import {
  Encoder,
  Decoder,
  EventSigner,
  Message,
  EventStreamMarshaller as IEventStreamMarshaller
} from "@aws-sdk/types";
import { Readable, pipeline } from "stream";
import { getSignatureBinary } from "./utils";
import { EventMessageChunkerStream } from "./EventMessageChunkerStream";
import { MessageUnmarshallerStream } from "./MessageUnmarshallerStream";
import { EventDeserializerStream } from "./EventDeserializerStream";
import { ReadabletoIterable } from "./streamToIterable";

export interface EventStreamMarshaller extends IEventStreamMarshaller {}

export interface EventStreamMarshallerOptions {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  signer: EventSigner;
}

export class EventStreamMarshaller {
  private readonly eventMarshaller: EventMarshaller;
  private readonly signer: EventSigner;
  constructor({
    utf8Encoder,
    utf8Decoder,
    signer
  }: EventStreamMarshallerOptions) {
    this.eventMarshaller = new EventMarshaller(utf8Encoder, utf8Decoder);
    this.signer = signer;
  }
  deserialize<T>(
    body: Readable,
    deserializer: (message: Message) => T,
    exceptionsDeserializer: (message: Message) => any
  ): AsyncIterable<T> {
    const eventDeserializerStream = new EventDeserializerStream({
      deserializer
    });
    pipeline(
      body,
      new EventMessageChunkerStream(), //frame the body
      new MessageUnmarshallerStream({
        eventMarshaller: this.eventMarshaller,
        exceptionsDeserializer
      }),
      eventDeserializerStream
    );
    //should use stream[Symbol.asyncIterable] when the api is stable
    //reference: https://nodejs.org/docs/latest-v11.x/api/stream.html#stream_readable_symbol_asynciterator
    return ReadabletoIterable(eventDeserializerStream);
  }
  serialize<T>(
    input: AsyncIterable<T>,
    serializer: (event: T) => Message,
    initialSignature: string
  ): Readable {
    //will use Readable.from(Iterable) in Node12
    let priorSignature = initialSignature;
    const inputIterator = input[Symbol.asyncIterator]();
    const self = this;
    let generatorDone = false;
    const stream = new Readable({
      objectMode: true,
      async read() {
        try {
          const result = await inputIterator.next();
          if (result.done && generatorDone) {
            this.push(null);
            return;
          }
          const payloadBuf = result.done
            ? new Uint8Array(0)
            : self.eventMarshaller.marshall(serializer(result.value));
          let now = new Date();
          let signature = await self.signer.signEvent(
            {
              payload: payloadBuf,
              headers: self.eventMarshaller.formatHeaders({
                headers: {
                  ":date": { type: "timestamp", value: now }
                },
                body: payloadBuf
              })
            },
            {
              priorSignature,
              signingDate: now
            }
          );
          const message: Message = {
            headers: {
              ":date": { type: "timestamp", value: now },
              ":chunk-signature": {
                type: "binary",
                value: getSignatureBinary(signature)
              }
            },
            body: payloadBuf
          };
          priorSignature = signature;
          const serialized = self.eventMarshaller.marshall(message);
          this.push(serialized);
          if (result.done && !generatorDone) generatorDone = true;
        } catch (e) {
          this.destroy(e);
        }
      }
    });
    //TODO: use 'autoDestroy' when targeting Node 11
    //reference: https://nodejs.org/dist/latest-v13.x/docs/api/stream.html#stream_new_stream_readable_options
    stream.on("error", () => {
      stream.destroy();
    });
    stream.on("end", () => {
      stream.destroy();
    });
    return stream;
  }
}
