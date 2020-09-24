import { NumberValue } from "./numberValue";

export type NativeAttributeValue =
  | NativeScalarAttributeValue
  | { [key: string]: NativeAttributeValue }
  | NativeAttributeValue[]
  | Set<number | bigint | string | NativeAttributeBinary>;

export type NativeScalarAttributeValue =
  | null
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
