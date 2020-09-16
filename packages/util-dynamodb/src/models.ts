export type NativeAttributeValue =
  | null
  | boolean
  | number
  | bigint
  | Uint8Array
  | string
  | { [key: string]: NativeAttributeValue }
  | NativeAttributeValue[];
