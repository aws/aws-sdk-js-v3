export function calculateBodyLength(body: any): number | undefined {
  if (typeof body === "string") {
    let len = body.length;

    for (let i = len - 1; i >= 0; i--) {
      const code = body.charCodeAt(i);
      if (code > 0x7f && code <= 0x7ff) len++;
      else if (code > 0x7ff && code <= 0xffff) len += 2;
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
