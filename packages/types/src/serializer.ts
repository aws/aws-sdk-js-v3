import { Decoder, Encoder } from "./util";
import { Endpoint } from "./http";

/**
 * Interface for object requires an Endpoint set.
 */
export interface EndpointBearer {
  endpoint: Endpoint;
}

/**
 * Response deserializer util functions for AWS services
 */
export interface SerializerContext extends EndpointBearer {
  utf8Decoder: Decoder;
  base64Encoder: Encoder;
}

export interface RequestSerializer<
  Request,
  Context extends EndpointBearer = any
> {
  /**
   * Converts the provided `input` into a request object
   *
   * @param transferProtocol The protocol as the request to be serialized
   *                          to. Like `RestJson`, `RestXML`
   * @param input     The user input to serialize.
   *
   * @param context    Context containing runtime-specific util functions.
   */
  (input: any, transferProtocol: string, context: Context): Request;
}
