import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import { Buffer } from "buffer";

export function fromArrayBuffer(input: ArrayBuffer, offset = 0, length: number = input.byteLength - offset): Buffer {
  if (!isArrayBuffer(input)) {
    throw new Error("argument passed to fromArrayBuffer was not an ArrayBuffer");
  }

  return Buffer.from(input, offset, length);
}

export type StringEncoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "base64" | "latin1" | "binary" | "hex";

export const fromString = (input: string, encoding?: StringEncoding): Buffer => {
  if (typeof input !== "string") {
    throw new Error("argument passed to fromString was not a string");
  }

  return encoding ? Buffer.from(input, encoding) : Buffer.from(input);
};
