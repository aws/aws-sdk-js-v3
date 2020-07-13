import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import { Buffer } from "buffer";

export function fromArrayBuffer(input: ArrayBuffer, offset = 0, length: number = input.byteLength - offset): Buffer {
  if (!isArrayBuffer(input)) {
    throw new Error("argument passed to fromArrayBuffer was not an ArrayBuffer");
  }

  if (typeof Buffer.from === "function" && Buffer.from !== Uint8Array.from) {
    return Buffer.from(input, offset, length);
  }

  // Any version of node that supports the optional offset and length
  // parameters, which were added in Node 6.0.0, will support Buffer.from and
  // have already returned. Throw if offset is not 0 or if length differs from
  // the underlying buffer's length.
  if (offset !== 0 || length !== input.byteLength) {
    throw new Error(`Unable to convert TypedArray to Buffer in Node ${process.version}`);
  }
  return new Buffer(input);
}
export type StringEncoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "base64" | "latin1" | "binary" | "hex";
export function fromString(input: string, encoding?: StringEncoding): Buffer {
  if (typeof input !== "string") {
    throw new Error("argument passed to fromString was not a string");
  }

  if (typeof Buffer.from === "function" && Buffer.from !== Uint8Array.from) {
    return Buffer.from(input, encoding as any);
  }

  return new Buffer(input, encoding as any);
}
