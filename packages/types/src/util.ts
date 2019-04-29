import { HttpEndpoint } from "./http";

/**
 * A function that, given a TypedArray of bytes, can produce a string
 * representation thereof.
 *
 * @example An encoder function that converts bytes to hexadecimal
 * representation would return `'deadbeef'` when given `new
 * Uint8Array([0xde, 0xad, 0xbe, 0xef])`.
 */
export interface Encoder {
  (input: Uint8Array): string;
}

/**
 * A function that, given a string, can derive the bytes represented by that
 * string.
 *
 * @example A decoder function that converts bytes to hexadecimal
 * representation would return `new Uint8Array([0xde, 0xad, 0xbe, 0xef])` when
 * given the string `'deadbeef'`.
 */
export interface Decoder {
  (input: string): Uint8Array;
}

/**
 * A function that, when invoked, returns a promise that will be fulfilled with
 * a value of type T.
 *
 * @example A function that reads credentials from shared SDK configuration
 * files, assuming roles and collecting MFA tokens as necessary.
 */
export interface Provider<T> {
  (): Promise<T>;
}

/**
 * A function that, given a request body, determines the
 * length of the body. This is used to determine the Content-Length
 * that should be sent with a request.
 *
 * @example A function that reads a file stream and calculates
 * the size of the file.
 */
export interface BodyLengthCalculator {
  (body: any): number | undefined;
}

/**
 * Determines the number of milliseconds to wait before retrying an action.
 *
 * @param delayBase The base delay (in milliseconds).
 * @param attempts  The number of times the action has already been tried.
 */
export interface DelayDecider {
  (delayBase: number, attempts: number): number;
}

// TODO Unify with the types created for the error parsers
export type SdkError = Error & { connectionError?: boolean };

/**
 * Determines whether an error is retryable based on the number of retries
 * already attempted, the HTTP status code, and the error received (if any).
 *
 * @param statusCode    The HTTP status code received.
 * @param error         The error encountered.
 */
export interface RetryDecider {
  (error: SdkError): boolean;
}

/**
 * Parses a URL in string form into an HttpEndpoint object.
 */
export interface UrlParser {
  (url: string): HttpEndpoint;
}
