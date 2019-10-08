import { Decoder, Encoder } from "./util";

/**
 * Response deserializer util functions for AWS services
 */
export interface SerializerUtils {
  utf8Decoder: Decoder;
  base64Encoder: Encoder;
}

export interface RequestSerializer<Request> {
  /**
   * Converts the provided `input` into a request object
   *
   * @param transferProtocol The protocol as the request to be serialized
   *                          to. Like `RestJson`, `RestXML`
   * @param input     The user input to serialize.
   *
   * @param config    The runtime-specific util functions. If provided will
   *                  overwrite the provided ones
   */
  (
    input: any,
    transferProtocol: string,
    utils?: { [key: string]: any }
  ): Request;
}
