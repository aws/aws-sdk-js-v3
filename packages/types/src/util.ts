import {ResponseMetadata} from './response'
import { MetadataBearer } from './index';
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
    (body: any): number;
}

/**
 * Exceptions that responded from AWS service containing raw http response
 * and parsed exception object
 * 
 * @property {any} details - parsed exception object normalized according to
 * its API model
 */
export interface ServiceException extends Error, MetadataBearer {
    details: any;
}

/**
 * An interface used to construct a ServiceException.
 * @property {ResponseMetadata} $metadata - Metadata about the response received, 
 * including the HTTP status code, HTTP headers, and any request identifiers
 * recognized by the SDK.
 * @property {string} name - name of exception
 * @property {string} message - a human readable description of exception
 * @property {any} rawException - parsed exception object normalized according to
 * its API model
 */
export interface ServiceExceptionOption {
    $metadata: ResponseMetadata,
    name?: string,
    message?: string,
    rawException?: any
}
