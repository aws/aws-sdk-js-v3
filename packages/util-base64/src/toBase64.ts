import { fromArrayBuffer } from "@aws-sdk/util-buffer-from";

/**
 * Converts a Uint8Array of binary data to a base-64 encoded string using
 * Node.JS's `buffer` module.
 *
 * @param input The binary data to encode
 */
export const toBase64 = (input: Uint8Array): string =>
  fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
