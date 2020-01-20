import { StreamCollector } from "@aws-sdk/types";

export const streamCollector: StreamCollector = (
  stream: ReadableStream
): Promise<Uint8Array> => {
  return new Response(stream)
    .arrayBuffer()
    .then(arrayBuffer => new Uint8Array(arrayBuffer));
};
