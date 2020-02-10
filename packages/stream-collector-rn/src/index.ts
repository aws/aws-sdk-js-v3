import { StreamCollector } from "@aws-sdk/types";
import { fromBase64 } from "@aws-sdk/util-base64-browser";

//reference: https://snack.expo.io/r1JCSWRGU
export const streamCollector: StreamCollector = (
  stream: Blob
): Promise<Uint8Array> => {
  return readToBase64(stream)
    .then(base64 => fromBase64(base64))
    .then(arrayBuffer => new Uint8Array(arrayBuffer));
};

const readToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      // reference: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
      // response from readAsDataURL is always prepended with "data:*/*;base64,"
      const result = reader.result as string;
      const dataOffset = result.lastIndexOf(",") + 1;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    // reader.readAsArrayBuffer is not available in RN
    reader.readAsDataURL(blob);
  });
};
