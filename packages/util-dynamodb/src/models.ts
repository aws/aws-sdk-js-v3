export type NativeAttributeValue =
  | null
  | boolean
  | number
  | bigint
  | NativeAttributeBinary
  | string
  | { [key: string]: NativeAttributeValue }
  | NativeAttributeValue[]
  | Set<NativeAttributeValue>;

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
