export type NativeAttributeValue =
  | null
  | boolean
  | number
  | number[]
  | Uint8Array
  | Uint8Array[]
  | string
  | string[]
  | { [key: string]: NativeAttributeValue }
  | NativeAttributeValue[];
