import { StreamCollector } from "@aws-sdk/types";

export const streamCollector: StreamCollector = async (
  stream: ReadableStream<Uint8Array>
): Promise<Uint8Array> => {
  let res = new Uint8Array(0);
  const reader = stream.getReader();
  let isDone = false;
  while(!isDone) {
    const { done, value } = await reader.read();
    if(value) {
      const prior = res;
      res = new Uint8Array(prior.length + value.length);
      res.set(prior);
      res.set(value, prior.length);
    }
    isDone = done;
  }
  return res;
};
