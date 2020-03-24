import { AbortSignal } from "./abort";
/**
 * A collection of key/value pairs with case-insensitive keys.
 */
export interface Headers extends Map<string, string> {
  /**
   * Returns a new instance of Headers with the specified header set to the
   * provided value. Does not modify the original Headers instance.
   *
   * @param headerName    The name of the header to add or overwrite
   * @param headerValue   The value to which the header should be set
   */
  withHeader(headerName: string, headerValue: string): Headers;

  /**
   * Returns a new instance of Headers without the specified header. Does not
   * modify the original Headers instance.
   *
   * @param headerName    The name of the header to remove
   */
  withoutHeader(headerName: string): Headers;
}

/**
 * A mapping of header names to string values. Multiple values for the same
 * header should be represented as a single string with values separated by
 * `, `.
 *
 * Keys should be considered case insensitive, even if this is not enforced by a
 * particular implementation. For example, given the following HeaderBag, where
 * keys differ only in case:
 *
 *    {
 *        'x-amz-date': '2000-01-01T00:00:00Z',
 *        'X-Amz-Date': '2001-01-01T00:00:00Z'
 *    }
 *
 * The SDK may at any point during processing remove one of the object
 * properties in favor of the other. The headers may or may not be combined, and
 * the SDK will not deterministically select which header candidate to use.
 */
export interface HeaderBag {
  [key: string]: string;
}

/**
 * Represents an HTTP message with headers and an optional static or streaming
 * body.
 */
export interface HttpMessage<StreamType = Uint8Array> {
  headers: HeaderBag;
  body?: ArrayBuffer | ArrayBufferView | string | StreamType;
}

/**
 * A mapping of query parameter names to strings or arrays of strings, with the
 * second being used when a parameter contains a list of values. Value can be set
 * to null when query is not in key-value pairs shape
 */
export interface QueryParameterBag {
  [key: string]: string | Array<string> | null;
}

export interface HttpEndpoint {
  protocol: string;
  hostname: string;
  port?: number;
  path: string;
  query?: QueryParameterBag;
}

/**
 * Represents an HTTP message constructed to be sent to a host. Contains
 * addressing information in addition to standard message properties.
 */
export interface HttpRequest<StreamType = Uint8Array>
  extends HttpMessage<StreamType>,
    HttpEndpoint {
  method: string;
}

/**
 * Represents an HTTP message as received in reply to a request. Contains a
 * numeric status code in addition to standard message properties.
 */
export interface HttpResponse<StreamType = Uint8Array>
  extends HttpMessage<StreamType> {
  statusCode: number;
}

/**
 * Represents HTTP message whose body has been resolved to a string. This is
 * used in parsing http message.
 */
export interface ResolvedHttpResponse extends HttpResponse {
  body: string;
}

/**
 * Represents the options that may be passed to an Http Handler.
 */
export interface HttpHandlerOptions {
  abortSignal?: AbortSignal;
}

/**
 * Represents the http options that can be shared across environments.
 */
export type HttpOptions = BrowserHttpOptions &
  NodeHttpOptions & { abortSignal?: AbortSignal };

/**
 * Represents the http options that can be passed to a browser http client.
 */
export interface BrowserHttpOptions {
  /**
   * The number of milliseconds a request can take before being automatically
   * terminated.
   */
  requestTimeout?: number;
}

/**
 * Represents the http options that can be passed to a node http client.
 */
export interface NodeHttpOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  connectionTimeout?: number;

  /**
   * Whether sockets should be kept open even when there are no outstanding
   * requests so that future requests can forgo having to reestablish a TCP or
   * TLS connection.
   */
  keepAlive?: boolean;

  /**
   * The maximum time in milliseconds that a socket may remain idle before it
   * is closed.
   */
  socketTimeout?: number;
}

/**
 * Represents the http2 options that can be passed to a node http2 client.
 */
export interface NodeHttp2Options extends HttpOptions {
  /**
   * The maximum time in milliseconds that a stream may remain idle before it
   * is closed.
   */
  requestTimeout?: number;

  /**
   * The maximum time in milliseconds that a session or socket may remain idle
   * before it is closed.
   * https://nodejs.org/docs/latest-v12.x/api/http2.html#http2_http2session_and_sockets
   */
  sessionTimeout?: number;
}
