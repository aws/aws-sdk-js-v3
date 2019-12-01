import { Transform, TransformOptions, TransformCallback } from "stream";
import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import { Message } from "@aws-sdk/types";

export type MessageUnmarshallerStreamOptions = TransformOptions & {
  eventMarshaller: EventMarshaller;
  exceptionsDeserializer: (message: Message) => any;
};

export class MessageUnmarshallerStream extends Transform {
  private readonly eventMarshaller: EventMarshaller;
  private readonly exceptionsDeserializer: (message: Message) => any;
  constructor(options: MessageUnmarshallerStreamOptions) {
    super({
      readableObjectMode: true,
      writableObjectMode: true,
      ...options
    });
    this.eventMarshaller = options.eventMarshaller;
    this.exceptionsDeserializer = options.exceptionsDeserializer;
    //TODO: use 'autoDestroy' when targeting Node 11
    //reference: https://nodejs.org/dist/latest-v13.x/docs/api/stream.html#stream_new_stream_readable_options
    this.on("error", () => {
      this.destroy();
    });
    this.on("end", () => {
      this.destroy();
    });
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
