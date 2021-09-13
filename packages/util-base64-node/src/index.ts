import { fromArrayBuffer, fromString } from "@aws-sdk/util-buffer-from";

const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;

/**
 * Converts a base-64 encoded string to a Uint8Array of bytes using Node.JS's
 * `buffer` module.
 *
 * @param input The base-64 encoded string
 */
export function fromBase64(input: string): Uint8Array {
  // Node's buffer module allows padding to be omitted, but we want to enforce
  // it. So here we ensure that the input represents a number of bits divisible
  // by 8. Each character represents 6 bits, so after reducing the fraction we
  // end up mulitplying by 3/4 and checking for a remainder.
  if ((input.length * 3) % 4 !== 0) {
    throw new TypeError(`Incorrect padding on base64 string.`);
  }

  // Node will just ingore invalid characters, so we need to make sure they're
  // properly rejected.
  if (!BASE64_REGEX.exec(input)) {
    throw new TypeError(`Invalid base64 string.`);
  }

  const buffer = fromString(input, "base64");

  return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
}

/**
 * Converts a Uint8Array of binary data to a base-64 encoded string using
 * Node.JS's `buffer` module.
 *
 * @param input The binary data to encode
 */
export function toBase64(input: Uint8Array): string {
  return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
}
