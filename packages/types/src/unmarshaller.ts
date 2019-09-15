import { Member, OperationModel } from "./protocol";
import { HttpResponse, ResolvedHttpResponse } from "./http";
import { MetadataBearer } from "./response";
import { ServiceException } from "./exception";

// export interface BodyParser<SerializedType = string> {
//   /**
//    * Convert the provided input into the shape described in the supplied
//    * serialization model.
//    *
//    * @param shape A serialization model describing the expected shape of the
//    *              value supplied as `input`.
//    * @param input The value to parse
//    */
//   parse<OutputType>(shape: Member, input: SerializedType): OutputType;
// }

export interface ResponseParser<ResponseType> {
  /**
   * Converts the output of an operation into JavaScript types.
   *
   * @param operation The operation model describing the structure of the HTTP
   *                  response received
   * @param input     The HTTP response received from the service
   */
  <OutputType>(output: ResponseType, protocolName: string): Promise<OutputType>;
}

// /**
//  * A function that converts a stream into an array of bytes.
//  */
// export interface StreamCollector<StreamType> {
//   (stream: StreamType): Promise<Uint8Array>;
// }

// /**
//  * A function that parses the http response when http status code > 299,
//  * parse the error response according to response and throw the ServiceException
//  */
// export interface ServiceExceptionParser {
//   (
//     operation: OperationModel,
//     response: ResolvedHttpResponse,
//     errorBodyParser: BodyParser
//   ): ServiceException;
// }
