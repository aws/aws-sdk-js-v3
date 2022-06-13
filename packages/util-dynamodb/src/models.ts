/**
 * A interface recognizable as a numeric value that stores the underlying number
 * as a string.
 *
 * Intended to be a deserialization target for the DynamoDB Document Client when
 * the `wrapNumbers` flag is set. This allows for numeric values that lose
 * precision when converted to JavaScript's `number` type.
 */
export interface NumberValue {
  readonly value: string;
}

export type NativeAttributeValue =
  | NativeScalarAttributeValue
  | { [key: string]: NativeAttributeValue }
  | NativeAttributeValue[]
  | Set<number | bigint | NumberValue | string | NativeAttributeBinary | undefined>
  | InstanceType<{ new (...args: any[]): any }>; // accepts any class instance with options.convertClassInstanceToMap

export type NativeScalarAttributeValue =
  | null
  | undefined
  | boolean
  | number
  | NumberValue
  | bigint
  | NativeAttributeBinary
  | string;

export type NativeAttributeBinary =
  | ArrayBuffer
  | Blob
  | Buffer
  | DataView
  | File
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;
