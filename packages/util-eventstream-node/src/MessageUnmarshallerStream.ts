import { Transform, TransformOptions, TransformCallback } from "stream";
import {
  EventStreamMarshaller as EventMarshaller,
  Message
} from "@aws-sdk/eventstream-marshaller";

export type MessageUnmarshallerStreamOptions = TransformOptions & {
  eventMarshaller: EventMarshaller;
  exceptionsDeserializer: (message: Message) => any;
};

export class MessageUnmarshallerStream extends Transform {
  private readonly eventMarshaller: EventMarshaller;
  private readonly exceptionsDeserializer: (message: Message) => any;
  constructor(options: MessageUnmarshallerStreamOptions) {
    super({
      ...options,
      readableObjectMode: true,
      writableObjectMode: true
    });
    this.eventMarshaller = options.eventMarshaller;
    this.exceptionsDeserializer = options.exceptionsDeserializer;
  }

  _transform(chunk: any, encoding: string, callback: TransformCallback) {
    try {
      const message = this.eventMarshaller.unmarshall(chunk);
      // console.log("MESSAGE: ", message);
      const { value: messageType } = message.headers[":message-type"];
      if (messageType === "exception") {
        throw this.exceptionsDeserializer(message);
      } else if (messageType === "event") {
        this.push({
          [message.headers[":event-type"].value as string]: message
        });
      } else {
        throw Error(
          `Unrecognizable event type: ${message.headers[":event-type"].value}`
        );
      }
      return callback();
    } catch (err) {
      callback(err);
    }
  }
}

interface FooEvent {
  headers: {};
  body: Uint8Array;
}
