import { GetAwsChunkedBodyOptions } from "@aws-sdk/types";
import { GetAwsChunkedBody } from "@aws-sdk/types";

/**
 * @internal
 *
 * Converts the input to an async iterable which follows aws-chunked encoding stream.
 * It optionally adds checksum if options are provided.
 *
 * @param input - AsyncIterable to convert to aws-chunked encoding stream.
 * @param options - Options used for checking body length and generating checksum.
 * @returns AsyncIterable which follows aws-chunked encoding stream.
 */
export const getAwsChunkedBody: GetAwsChunkedBody = <T>(
  input: AsyncIterable<T>,
  options: GetAwsChunkedBodyOptions
): AsyncIterable<any> => ({
  [Symbol.asyncIterator]: async function* () {
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired =
      base64Encoder !== undefined &&
      checksumAlgorithmFn !== undefined &&
      checksumLocationName !== undefined &&
      streamHasher !== undefined;
    const digest = checksumRequired ? streamHasher!(checksumAlgorithmFn!, input) : undefined;
    for await (const chunk of input) {
      yield `${(bodyLengthChecker(chunk) || 0).toString(16)}\r\n${chunk}\r\n`;
    }
    yield `0\r\n`;
    if (checksumRequired) {
      const checksum = base64Encoder!(await digest!);
      yield `${checksumLocationName}:${checksum}\r\n`;
      yield `\r\n`;
    }
  },
});
