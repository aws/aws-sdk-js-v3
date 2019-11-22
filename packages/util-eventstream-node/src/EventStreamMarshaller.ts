import {
  EventStreamMarshaller as EventMarshaller,
  Message
} from "@aws-sdk/eventstream-marshaller";
import { Encoder, Decoder, EventSigner } from "@aws-sdk/types";
import { Readable } from "stream";
import { waitTillDrain, waitTillEnd, getSignatureBinary } from "./utils";
import { EventMessageChunkerStream } from "./EventMessageChunkerStream";
import { MessageUnmarshallerStream } from "./MessageUnmarshallerStream";
import { EventDeserializerStream } from "./EventDeserializerStream";
import { ReadabletoIterable } from "./streamToIterable";

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
    deserializer: (message: Message) => T
  ): AsyncIterable<T> {
    //frame the body
    const eventMessageChunker = new EventMessageChunkerStream();
    const messageUnmarshaller = new MessageUnmarshallerStream({
      eventMarshaller: this.eventMarshaller
    });
    const eventDeserializerStream = new EventDeserializerStream({
      deserializer
    });
    body
      .on("error", err => {
        throw err;
      })
      .pipe(eventMessageChunker)
      .on("error", err => {
        throw err;
      })
      .pipe(messageUnmarshaller)
      .on("error", err => {
        throw err;
      })
      .pipe(eventDeserializerStream)
      .on("error", err => {
        throw err;
      });
    if (eventDeserializerStream[Symbol.asyncIterator]) {
      return eventDeserializerStream;
    } else {
      return ReadabletoIterable(eventDeserializerStream);
    }
  }
  serialize<T>(
    input: AsyncIterable<T>,
    initialSignature: string,
    serializer: (event: T) => Message
  ): Readable {
    //will use Readable.from(Iterable) in Node12
    let priorSignature = initialSignature;
    const inputIterator = input[Symbol.asyncIterator]();
    const self = this;
    const stream = new Readable({
      async read() {
        const result = await inputIterator.next();
        const payload = result.done
          ? { headers: {}, body: Buffer.from("") }
          : serializer(result.value);
        const payloadBuf = self.eventMarshaller.marshall(payload);
        let now = new Date();
        const messageToSign: Message = {
          headers: {
            ":date": { type: "timestamp", value: now }
          },
          body: payloadBuf
        };
        let signature = await self.signer.signEvent(
          {
            payload: messageToSign.body,
            headers: self.eventMarshaller.formatHeaders(messageToSign)
          },
          {
            priorSignature,
            signingDate: now
          }
        );
        const message: Message = {
          headers: {
            ...messageToSign.headers,
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
      }
    });
    return stream;
  }
}

const gen: AsyncIterable<any> = {
  [Symbol.asyncIterator]: async function*() {
    yield "good";
  }
};

// //return stream sync but write to stream async
// Promise.resolve().then(async () => {
//   let priorSignature = initialSignature;
//   for await (const event of input) {
//     const message = serializer(event);
//     const now = new Date();
//     message.headers[":date"] = {
//       type: "timestamp",
//       value: now
//     };
//     const signature = await this.signer.signEvent(
//       {
//         payload: message.body,
//         headers: this.eventMarshaller.formatHeaders(message)
//       },
//       {
//         priorSignature,
//         signingDate: now
//       }
//     );
//     message.headers[":chunk-signature"] = {
//       type: "binary",
//       value: getSignatureBinary(signature)
//     };
//     priorSignature = signature;
//     const serialized = this.eventMarshaller.marshall(message);
//     if (!stream.write(serialized)) {
//       await waitTillDrain(stream);
//     }
//   }
//   //TODO: end event stream with empty payload
//   await waitTillEnd(stream);
// });
