import { StreamCollector } from "@aws-sdk/types";

export const streamCollector: StreamCollector = (
  stream: ReadableStream
): Promise<Uint8Array> => {
  // new Promise<Uint8Array>((resolve, reject) => {
  // const reader = new FileReader();
  // reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
  // reader.onabort = () => reject(new Error("Read aborted"));
  // reader.onerror = () => reject(reader.error);
  // reader.readAsArrayBuffer(stream);
  // });
  const reader = stream.getReader();
  const collectingStream = new ReadableStream({
    start(controller) {
      const pump = (): Promise<any> => {
        return reader.read().then(({ done, value }) => {
          // When no more data needs to be consumed, close the stream
          if (done) {
            controller.close();
            return;
          }
          // Enqueue the next data chunk into our target stream
          controller.enqueue(value);
          return pump();
        });
      };
      return pump();
    }
  });
  return new Response(collectingStream).blob().then(blob => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    return new Uint8Array(reader.result as ArrayBuffer);
  });
};
