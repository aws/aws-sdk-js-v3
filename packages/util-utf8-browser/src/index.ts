import { fromUtf8 as jsFromUtf8, toUtf8 as jsToUtf8 } from "./pureJs";
import { fromUtf8 as textEncoderFromUtf8, toUtf8 as textEncoderToUtf8 } from "./whatwgEncodingApi";

declare const TextDecoder: Function | undefined;
declare const TextEncoder: Function | undefined;

export function fromUtf8(input: string): Uint8Array {
  if (typeof TextEncoder === "function") {
    return textEncoderFromUtf8(input);
  }

  return jsFromUtf8(input);
}

export function toUtf8(input: Uint8Array): string {
  if (typeof TextDecoder === "function") {
    return textEncoderToUtf8(input);
  }

  return jsToUtf8(input);
}
