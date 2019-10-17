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
 * Response deserializer utils functions for AWS services
 */
export interface DeserializerUtils {
  base64Decoder: Decoder;
  utf8Encoder: Encoder;
  streamCollector: StreamCollector;
}

export interface ResponseDeserializer<
  OutputType,
  ResponseType = any,
  RuntimeUtils = any
> {
  /**
   * Converts the output of an operation into JavaScript types.
   *
   * @param operation The operation model describing the structure of the HTTP
   *                  response received
   * @param input     The HTTP response received from the service
   *
   * @param utils    The runtime-specific util functions. If provided will
   *                  overwrite the provided ones
   */
  (output: ResponseType, protocolName: string, utils: RuntimeUtils): Promise<
    OutputType
  >;
}
