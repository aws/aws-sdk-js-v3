import { Writable } from "stream";
import { Buffer } from "buffer";

export function waitTillDrain(stream: Writable): Promise<void> {
  return new Promise(resolve => {
    stream.once("drain", resolve);
  });
}

export function waitTillEnd(stream: Writable): Promise<void> {
  return new Promise(resolve => {
    stream.end(resolve);
  });
}

export function getSignatureBinary(signature: string): Uint8Array {
  const buf = Buffer.from(signature, "hex");
  return new Uint8Array(
    buf.buffer,
    buf.byteOffset,
    buf.byteLength / Uint8Array.BYTES_PER_ELEMENT
  );
}
