import { fstatSync, lstatSync } from "fs";

export const calculateBodyLength = (body: any): number | undefined => {
  if (!body) {
    return 0;
  }
  if (typeof body === "string") {
    return Buffer.from(body).length;
  } else if (typeof body.byteLength === "number") {
    // handles Uint8Array, ArrayBuffer, Buffer, and ArrayBufferView
    return body.byteLength;
  } else if (typeof body.size === "number") {
    return body.size;
  } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
    // handles fs readable streams
    return lstatSync(body.path).size;
  } else if (typeof body.fd === "number") {
    // handles fd readable streams
    return fstatSync(body.fd).size;
  }
  throw new Error(`Body Length computation failed for ${body}`);
};
