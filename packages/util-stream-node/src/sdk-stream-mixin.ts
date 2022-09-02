import { streamCollector } from "@aws-sdk/node-http-handler";
import { SdkStream, SdkStreamMixin } from "@aws-sdk/types";
import { fromArrayBuffer } from "@aws-sdk/util-buffer-from";
import { Readable } from "stream";
import { TextDecoder } from "util";

const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";

/**
 * The function that mixes in the utility functions to help consuming runtime-specific payload stream.
 *
 * @internal
 */
export const sdkStreamMixin = (stream: unknown): SdkStream<Readable> => {
  if (!(stream instanceof Readable)) {
    // @ts-ignore
    const name = stream?.__proto__?.constructor?.name || stream;
    throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
  }

  let transformed = false;
  const transformToByteArray = async () => {
    if (transformed) {
      throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
    }
    transformed = true;
    return await streamCollector(stream);
  };

  return Object.assign<Readable, SdkStreamMixin>(stream, {
    transformToByteArray,
    transformToString: async (encoding?: string) => {
      const buf = await transformToByteArray();
      if (encoding === undefined || Buffer.isEncoding(encoding)) {
        return fromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
      } else {
        const decoder = new TextDecoder(encoding);
        return decoder.decode(buf);
      }
    },
    transformToWebStream: () => {
      if (transformed) {
        throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
      }
      if (stream.readableFlowing !== null) {
        // Prevent side effect of consuming webstream.
        throw new Error("The stream has been consumed by other callbacks.");
      }
      // @ts-expect-error toWeb() is only available in Node.js >= 17.0.0
      if (typeof Readable.toWeb !== "function") {
        throw new Error(
          "Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available."
        );
      }
      transformed = true;
      // @ts-expect-error toWeb() is only available in Node.js >= 17.0.0
      return Readable.toWeb(stream);
    },
  });
};
