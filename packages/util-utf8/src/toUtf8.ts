import { fromArrayBuffer } from "@aws-sdk/util-buffer-from";

export const toUtf8 = (input: Uint8Array): string =>
  fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
