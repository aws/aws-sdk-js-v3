import { HttpRequest } from "./http";
import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  HandlerExecutionContext,
} from "./middleware";
import { MetadataBearer } from "./response";
/**
 * @public
 *
 * An event stream message. The headers and body properties will always be
 * defined, with empty headers represented as an object with no keys and an
 * empty body represented as a zero-length Uint8Array.
 */
export interface Message {
  headers: MessageHeaders;
  body: Uint8Array;
}

/**
 * @public
 */
export type MessageHeaders = Record<string, MessageHeaderValue>;

/**
 * @public
 */
export interface BooleanHeaderValue {
  type: "boolean";
  value: boolean;
}

/**
 * @public
 */
export interface ByteHeaderValue {
  type: "byte";
  value: number;
}

/**
 * @public
 */
export interface ShortHeaderValue {
  type: "short";
  value: number;
}

/**
 * @public
 */
export interface IntegerHeaderValue {
  type: "integer";
  value: number;
}

/**
 * @public
 */
export interface LongHeaderValue {
  type: "long";
  value: Int64;
}

/**
 * @public
 */
export interface BinaryHeaderValue {
  type: "binary";
  value: Uint8Array;
}

/**
 * @public
 */
export interface StringHeaderValue {
  type: "string";
  value: string;
}

/**
 * @public
 */
export interface TimestampHeaderValue {
  type: "timestamp";
  value: Date;
}

/**
 * @public
 */
export interface UuidHeaderValue {
  type: "uuid";
  value: string;
}

/**
 * @public
 */
export type MessageHeaderValue =
  | BooleanHeaderValue
  | ByteHeaderValue
  | ShortHeaderValue
  | IntegerHeaderValue
  | LongHeaderValue
  | BinaryHeaderValue
  | StringHeaderValue
  | TimestampHeaderValue
  | UuidHeaderValue;

/**
 * @public
 */
export interface Int64 {
  readonly bytes: Uint8Array;
  valueOf: () => number;
  toString: () => string;
}

/**
 * @public
 *
 * Util functions for serializing or deserializing event stream
 */
export interface EventStreamSerdeContext {
  eventStreamMarshaller: EventStreamMarshaller;
}

/**
 * @public
 *
 * A function which deserializes binary event stream message into modeled shape.
 */
export interface EventStreamMarshallerDeserFn<StreamType> {
  <T>(body: StreamType, deserializer: (input: Record<string, Message>) => Promise<T>): AsyncIterable<T>;
}

/**
 * @public
 *
 * A function that serializes modeled shape into binary stream message.
 */
export interface EventStreamMarshallerSerFn<StreamType> {
  <T>(input: AsyncIterable<T>, serializer: (event: T) => Message): StreamType;
}

/**
 * @public
 *
 * An interface which provides functions for serializing and deserializing binary event stream
 * to/from corresponsing modeled shape.
 */
export interface EventStreamMarshaller<StreamType = any> {
  deserialize: EventStreamMarshallerDeserFn<StreamType>;
  serialize: EventStreamMarshallerSerFn<StreamType>;
}

/**
 * @public
 */
export interface EventStreamRequestSigner {
  sign(request: HttpRequest): Promise<HttpRequest>;
}

/**
 * @public
 */
export interface EventStreamPayloadHandler {
  handle: <Input extends object, Output extends MetadataBearer>(
    next: FinalizeHandler<Input, Output>,
    args: FinalizeHandlerArguments<Input>,
    context?: HandlerExecutionContext
  ) => Promise<FinalizeHandlerOutput<Output>>;
}

/**
 * @public
 */
export interface EventStreamPayloadHandlerProvider {
  (options: any): EventStreamPayloadHandler;
}

/**
 * @public
 */
export interface EventStreamSerdeProvider {
  (options: any): EventStreamMarshaller;
}

/**
 * @public
 */
export interface EventStreamSignerProvider {
  (options: any): EventStreamRequestSigner;
}
