import { StreamCollector } from "@aws-sdk/types";

export const streamCollector: StreamCollector = (
  stream: ReadableStream
): Promise<Uint8Array> => {
  const blobToArrayBuffer = (stream: Blob) =>
    new Promise<Uint8Array>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve(new Uint8Array(reader.result as ArrayBuffer));
      reader.onabort = () => reject(new Error("Read aborted"));
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(stream);
    });
  return new Response(stream).blob().then(blobToArrayBuffer);
};
