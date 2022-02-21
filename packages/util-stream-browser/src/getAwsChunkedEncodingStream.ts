import { GetAwsChunkedEncodingStream, GetAwsChunkedEncodingStreamOptions } from "@aws-sdk/types";

export const getAwsChunkedEncodingStream: GetAwsChunkedEncodingStream<ReadableStream> = (
  readableStream: ReadableStream,
  options: GetAwsChunkedEncodingStreamOptions
) => {
  const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;

  const checksumRequired =
    base64Encoder !== undefined &&
    bodyLengthChecker !== undefined &&
    checksumAlgorithmFn !== undefined &&
    checksumLocationName !== undefined &&
    streamHasher !== undefined;
  const digest = checksumRequired ? streamHasher!(checksumAlgorithmFn!, readableStream) : undefined;

  // ToDo: Validate the ReadableStream and getReader() is accessable before calling.
  // ReactNative doesn't support ReadableStream. They might not be available in older browsers, or some polyfills.
  const reader = readableStream.getReader();
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await reader.read();

      if (done) {
        controller.enqueue(`0\r\n`);
        if (checksumRequired) {
          const checksum = base64Encoder!(await digest!);
          controller.enqueue(`${checksumLocationName}:${checksum}\r\n`);
          controller.enqueue(`\r\n`);
        }
        controller.close();
      } else {
        controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r\n${value}\r\n`);
      }
    },
  });
};
