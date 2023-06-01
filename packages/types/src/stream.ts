import { ChecksumConstructor } from "./checksum";
import { HashConstructor, StreamHasher } from "./crypto";
import { BodyLengthCalculator, Encoder } from "./util";

/**
 * @public
 *
 * @deprecated Use GetAwsChunkedBodyOptions with GetAwsChunkedBody
 */
export interface GetAwsChunkedEncodingStreamOptions {
  base64Encoder?: Encoder;
  bodyLengthChecker: BodyLengthCalculator;
  checksumAlgorithmFn?: ChecksumConstructor | HashConstructor;
  checksumLocationName?: string;
  streamHasher?: StreamHasher;
}

/**
 * @public
 *
 * A function that returns Readable Stream which follows aws-chunked encoding stream.
 * It optionally adds checksum if options are provided.
 *
 * @deprecated Use GetAwsChunkedBody
 */
export interface GetAwsChunkedEncodingStream<StreamType = any> {
  (readableStream: StreamType, options: GetAwsChunkedEncodingStreamOptions): StreamType;
}

/**
 * @internal
 */
export interface GetAwsChunkedBodyOptions {
  base64Encoder?: Encoder;
  bodyLengthChecker: BodyLengthCalculator;
  checksumAlgorithmFn?: ChecksumConstructor | HashConstructor;
  checksumLocationName?: string;
  streamHasher?: StreamHasher;
}

/**
 * @internal
 *
 * A function that returns AsyncIterable which follows aws-chunked encoding stream.
 * It optionally adds checksum if options are provided.
 */
export interface GetAwsChunkedBody {
  <T>(input: AsyncIterable<T>, options: GetAwsChunkedBodyOptions): AsyncIterable<T>;
}
