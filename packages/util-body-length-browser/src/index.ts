export function calculateBodyLength(body: any): number | undefined {
  if (typeof body === "string") {
    return body.length;
  } else if (typeof body.byteLength === "number") {
    // handles Uint8Array, ArrayBuffer, Buffer, and ArrayBufferView
    return body.byteLength;
  } else if (typeof body.size === "number") {
    // handles browser File object
    return body.size;
  }
}
