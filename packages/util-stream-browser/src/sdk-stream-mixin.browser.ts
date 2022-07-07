import { streamCollector } from "@aws-sdk/fetch-http-handler";
import { SdkStream, SdkStreamMixin } from "@aws-sdk/types";

const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";

export const sdkStreamMixin = (stream: ReadableStream | Blob): SdkStream<ReadableStream | Blob> => {
  let transformed = false;
  const transformToByteArray = async () => {
    if (transformed) {
      throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
    }
    transformed = true;
    return await streamCollector(stream);
  };

  return Object.assign<ReadableStream | Blob, SdkStreamMixin>(stream, {
    transformToByteArray: transformToByteArray,
    transformToString: async (encoding?: string) => {},
    transformToWebStream: () => {},
  });
};
