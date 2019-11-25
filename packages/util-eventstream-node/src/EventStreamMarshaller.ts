import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import {
  Encoder,
  Decoder,
  EventSigner,
  Message,
  EventStreamMarshaller as IEventStreamMarshaller
} from "@aws-sdk/types";
import { Readable } from "stream";
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
    //frame the body
    const eventMessageChunker = new EventMessageChunkerStream();
    const messageUnmarshaller = new MessageUnmarshallerStream({
      eventMarshaller: this.eventMarshaller,
      exceptionsDeserializer
    });
    const eventDeserializerStream = new EventDeserializerStream({
      deserializer
    });
    //TODO: use stream.pipeline()
    body
      .on("error", err => {
        eventMessageChunker.emit("error", err);
      })
      .pipe(eventMessageChunker)
      .on("error", err => {
        messageUnmarshaller.emit("error", err);
      })
      .pipe(messageUnmarshaller)
      .on("error", err => {
        eventDeserializerStream.emit("error", err);
      })
      .pipe(eventDeserializerStream)
      .on("error", err => {
        throw err;
      });
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
          if (result.done && !generatorDone) {
            generatorDone = true;
            return;
          } else if (result.done && generatorDone) {
            this.emit("end");
            this.destroy();
            console.log("done: ", message);
          }
        } catch (e) {
          this.destroy(e);
        }
      }
    });
    return stream;
  }
}
