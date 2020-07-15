export function calculateBodyLength(body: any): number | undefined {
  if (typeof body === "string") {
    let len = body.length;

    // Source: https://github.com/DylanPiercey/byte-length
    for (let i = len; i--; ) {
      const code = body.charCodeAt(i);
      if (0xdc00 <= code && code <= 0xdfff) {
        i--;
      }

      if (0x7f < code && code <= 0x7ff) {
        len++;
      } else if (0x7ff < code && code <= 0xffff) {
        len += 2;
      }
    }

    return len;
  } else if (typeof body.byteLength === "number") {
    // handles Uint8Array, ArrayBuffer, Buffer, and ArrayBufferView
    return body.byteLength;
  } else if (typeof body.size === "number") {
    // handles browser File object
    return body.size;
  }
}
