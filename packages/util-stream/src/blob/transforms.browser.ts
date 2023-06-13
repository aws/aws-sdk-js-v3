import { Uint8ArrayBlobAdapter } from "./Uint8ArrayBlobAdapter";

/**
 * @internal
 */
export function transformToString(payload: Uint8Array, encoding = "utf-8"): string {
  const textDecoder = new TextDecoder(encoding);
  return textDecoder.decode(payload);
}

/**
 * @internal
 */
export function transformFromString(str: string): Uint8ArrayBlobAdapter {
  const textEncoder = new TextEncoder();
  return new Uint8ArrayBlobAdapter(textEncoder.encode(str));
}

/**
 * @internal
 */
export function transformFromObject(obj: object): Uint8ArrayBlobAdapter {
  return new Uint8ArrayBlobAdapter(obj as any);
}
