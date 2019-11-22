import { Transform, TransformOptions, TransformCallback } from "stream";
import {
  EventStreamMarshaller as EventMarshaller,
  Message
} from "@aws-sdk/eventstream-marshaller";

export type MessageUnmarshallerStreamOptions = TransformOptions & {
  eventMarshaller: EventMarshaller;
};

export class MessageUnmarshallerStream extends Transform {
  private readonly eventMarshaller: EventMarshaller;
  constructor(options: MessageUnmarshallerStreamOptions) {
    super({
      ...options,
      readableObjectMode: true,
      writableObjectMode: true
    });
    this.eventMarshaller = options.eventMarshaller;
  }

  _transform(chunk: any, encoding: string, callback: TransformCallback) {
    try {
      const message = this.eventMarshaller.unmarshall(chunk);
      this.push({
        //prepare the message into a key-value pair with event name as key
        [(message as Message).headers[":event-type"].value as string]: message
      });
      return callback();
    } catch (err) {
      callback(err);
    }
  }
}
