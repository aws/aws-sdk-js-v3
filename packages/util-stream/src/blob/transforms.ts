import { fromBase64, toBase64 } from "@aws-sdk/util-base64";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8";

import { Uint8ArrayBlobAdapter } from "./Uint8ArrayBlobAdapter";

/**
 * @internal
 */
export function transformToString(payload: Uint8Array, encoding = "utf-8"): string {
  if (encoding === "base64") {
    return toBase64(payload);
  }
  return toUtf8(payload);
}

/**
 * @internal
 */
export function transformFromString(str: string, encoding?: string): Uint8ArrayBlobAdapter {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
  }
  return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}
