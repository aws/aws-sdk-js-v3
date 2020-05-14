import { fromArrayBuffer, fromString } from "@aws-sdk/util-buffer-from";

export function fromUtf8(input: string): Uint8Array {
  const buf = fromString(input, "utf8");

  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}

export function toUtf8(input: Uint8Array): string {
  return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
}
