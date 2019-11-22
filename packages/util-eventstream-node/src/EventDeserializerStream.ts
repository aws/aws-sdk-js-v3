import { Transform, TransformOptions, TransformCallback } from "stream";

export type EventDeserializerStreamOptions = TransformOptions & {
  deserializer: (input: any) => any;
};

export class EventDeserializerStream extends Transform {
  private readonly deserializer: (input: any) => any;
  constructor(options: EventDeserializerStreamOptions) {
    super({
      ...options,
      readableObjectMode: true,
      writableObjectMode: true
    });
    this.deserializer = options.deserializer;
  }

  _transform(chunk: any, encoding: string, callback: TransformCallback) {
    try {
      const eventName = Object.keys(chunk)[0];
      this.push({ [eventName]: this.deserializer(chunk) });
      return callback();
    } catch (err) {
      callback(err);
    }
  }
}
