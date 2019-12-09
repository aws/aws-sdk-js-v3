import { Decoder, Encoder, Provider } from "./util";
import { Endpoint, HttpRequest } from "./http";
import { RequestHandler } from "./transfer";
import { RequestSigner } from "./signature";

/**
 * Interface for object requires an Endpoint set.
 */
export interface EndpointBearer {
  endpoint: Provider<Endpoint>;
}

export interface StreamCollector {
  /**
   * A function that converts a stream into an array of bytes.
   *
   * @param stream  The low-level native stream from browser or Nodejs runtime
   */
  (stream: any): Promise<Uint8Array>;
}

/**
 * Request and Response serde util functions for AWS services
 */
export interface SerdeContext extends EndpointBearer {
  base64Encoder: Encoder;
  base64Decoder: Decoder;
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  streamCollector: StreamCollector;
  requestHandler: RequestHandler<any, any>;
}

export interface RequestSerializer<
  Request,
  Context extends EndpointBearer = any
> {
  /**
   * Converts the provided `input` into a request object
   *
   * @param input     The user input to serialize.
   *
   * @param context    Context containing runtime-specific util functions.
   */
  (input: any, context: Context): Promise<Request>;
}

export interface ResponseDeserializer<
  OutputType,
  ResponseType = any,
  Context = any
> {
  /**
   * Converts the output of an operation into JavaScript types.
   *
   * @param output     The HTTP response received from the service
   *
   * @param context    context containing runtime-specific util functions.
   */
  (output: ResponseType, context: Context): Promise<OutputType>;
}
