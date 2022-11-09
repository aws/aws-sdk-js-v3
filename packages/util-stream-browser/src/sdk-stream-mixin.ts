import { streamCollector } from "@aws-sdk/fetch-http-handler";
import { SdkStream, SdkStreamMixin } from "@aws-sdk/types";
import { toBase64 } from "@aws-sdk/util-base64";
import { toHex } from "@aws-sdk/util-hex-encoding";
import { toUtf8 } from "@aws-sdk/util-utf8-browser";

const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";

/**
 * The stream handling utility functions for browsers and React Native
 *
 * @internal
 */
export const sdkStreamMixin = (stream: unknown): SdkStream<ReadableStream | Blob> => {
  if (!isBlobInstance(stream) && !isReadableStreamInstance(stream)) {
    //@ts-ignore
    const name = stream?.__proto__?.constructor?.name || stream;
    throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
  }

  let transformed = false;
  const transformToByteArray = async () => {
    if (transformed) {
      throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
    }
    transformed = true;
    return await streamCollector(stream);
  };

  const blobToWebStream = (blob: Blob) => {
    if (typeof blob.stream !== "function") {
      throw new Error(
        "Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\n" +
          "If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body"
      );
    }
    return blob.stream();
  };

  return Object.assign<ReadableStream | Blob, SdkStreamMixin>(stream, {
    transformToByteArray: transformToByteArray,

    transformToString: async (encoding?: string) => {
      const buf = await transformToByteArray();
      if (encoding === "base64") {
        return toBase64(buf);
      } else if (encoding === "hex") {
        return toHex(buf);
      } else if (encoding === undefined || encoding === "utf8" || encoding === "utf-8") {
        // toUtf8() itself will use TextDecoder and fallback to pure JS implementation.
        return toUtf8(buf);
      } else if (typeof TextDecoder === "function") {
        return new TextDecoder(encoding).decode(buf);
      } else {
        throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
      }
    },

    transformToWebStream: () => {
      if (transformed) {
        throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
      }
      transformed = true;
      if (isBlobInstance(stream)) {
        // ReadableStream is undefined in React Native
        return blobToWebStream(stream);
      } else if (isReadableStreamInstance(stream)) {
        return stream;
      } else {
        throw new Error(`Cannot transform payload to web stream, got ${stream}`);
      }
    },
  });
};

const isBlobInstance = (stream: unknown): stream is Blob => typeof Blob === "function" && stream instanceof Blob;

const isReadableStreamInstance = (stream: unknown): stream is ReadableStream =>
  typeof ReadableStream === "function" && stream instanceof ReadableStream;
