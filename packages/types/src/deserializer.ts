import { Decoder, Encoder } from "./util";

export interface StreamCollector {
  /**
   * A function that converts a stream into an array of bytes.
   *
   * @param stream  The low-level native stream from browser or Nodejs runtime
   */
  (stream: any): Promise<Uint8Array>;
}

/**
 * Function execution context contains util functions for deserializers
 */
export interface DeserializerContext {
  base64Decoder: Decoder;
  utf8Encoder: Encoder;
  streamCollector: StreamCollector;
}

export interface ResponseDeserializer<
  OutputType,
  ResponseType = any,
  Context = any
> {
  /**
   * Converts the output of an operation into JavaScript types.
   *
   * @param operation The operation model describing the structure of the HTTP
   *                  response received
   * @param input     The HTTP response received from the service
   *
   * @param context    context containing runtime-specific util functions.
   */
  (output: ResponseType, protocolName: string, context: Context): Promise<
    OutputType
  >;
}
