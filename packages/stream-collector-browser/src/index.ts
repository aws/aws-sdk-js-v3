import { StreamCollector } from "@aws-sdk/types";

export const streamCollector: StreamCollector = (
  stream: ReadableStream
): Promise<Uint8Array> => {
  return new Response(stream).blob().then(blob => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    return new Uint8Array(reader.result as ArrayBuffer);
  });
};
