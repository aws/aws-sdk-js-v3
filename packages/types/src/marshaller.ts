import { Member, OperationModel } from "./protocol";
import { HttpRequest } from "./http";

// export interface BodySerializer<SerializedType = string> {
//   /**
//    * Converts the provided `input` into the serialized format described in the
//    * provided `shape`.
//    *
//    * @param options Modeled and user-provided operation input to serialize.
//    *
//    * @throws if a node in the input cannot be converted into the type
//    *          specified by the serialization model
//    */
//   build(options: BodySerializerBuildOptions): SerializedType;
// }

// export interface BodySerializerBuildOptions {
//   /**
//    * Whether the operation input contains a payload member.
//    */
//   hasPayload?: boolean;
//   /**
//    * The value to convert.
//    */
//   input: any;
//   /**
//    * The root input member of the operation used to serialize the body.
//    * Should be either operation input or the input payload member.
//    * Defaults to operation.input.
//    */
//   member?: Member;
//   /**
//    * Location name for the member.
//    */
//   memberName?: string;
//   /**
//    * The operation model to which the input should be converted.
//    */
//   operation: OperationModel;
// }

export interface RequestSerializer<Request> {
  /**
   * Converts the provided `input` into a request object
   *
   * @param transferProtocol The protocol as the request to be serialized
   *                          to. Like `RestJson`, `RestXML`
   * @param input     The user input to serialize.
   */
  (input: any, transferProtocol?: string): Request;
}
