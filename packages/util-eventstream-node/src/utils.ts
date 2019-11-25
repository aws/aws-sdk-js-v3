import { Buffer } from "buffer";

export function getSignatureBinary(signature: string): Uint8Array {
  const buf = Buffer.from(signature, "hex");
  return new Uint8Array(
    buf.buffer,
    buf.byteOffset,
    buf.byteLength / Uint8Array.BYTES_PER_ELEMENT
  );
}
