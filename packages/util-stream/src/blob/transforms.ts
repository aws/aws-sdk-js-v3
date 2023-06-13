import { Readable } from "stream";

import { Uint8ArrayBlobAdapter } from "./Uint8ArrayBlobAdapter";

/**
 * @internal
 */
export function transformToString(payload: Uint8Array, encoding = "utf-8"): string {
  return Buffer.from(payload).toString(encoding as BufferEncoding);
}

/**
 * @internal
 */
export function transformFromString(str: string): Uint8ArrayBlobAdapter {
  return new Uint8ArrayBlobAdapter(Buffer.from(str));
}

/**
 * @internal
 */
export function transformFromObject(obj: object): Uint8ArrayBlobAdapter {
  return new Uint8ArrayBlobAdapter(obj as any);
}
