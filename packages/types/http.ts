/**
 * Represents an HTTP message with headers and an optional static or streaming
 * body.
 */
export interface HttpMessage<StreamType = Uint8Array> {
    headers: {[key: string]: Array<string>};
    body?: ArrayBuffer|ArrayBufferView|string|StreamType;
}

export interface HttpEndpoint {
    protocol: string;
    hostname: string;
    port?: number;
    path: string;
    query?: {[key: string]: string|Array<string>};
}

/**
 * Represents an HTTP message constructed to be sent to a host. Contains
 * addressing information in addition to standard message properties.
 */
export interface HttpRequest<StreamType = Uint8Array> extends
    HttpMessage<StreamType>,
    HttpEndpoint
{
    method: string;
}

/**
 * Represents an HTTP message as received in reply to a request. Contains a
 * numeric status code in addition to standard message properties.
 */
export interface HttpResponse<StreamType = Uint8Array> extends
    HttpMessage<StreamType>
{
    statusCode: number;
}

/**
 * A function that takes an HTTP request and returns a promise for an HTTP
 * response.
 *
 * If a `StreamType` type parameter is supplied, both the request and the
 * response may have streaming bodies. In such implementations, the promise
 * returned should resolve as soon as headers are available, and the as-yet
 * uncollected stream should be set as the response's `body` property.
 */
export interface HttpHandler<StreamType = Uint8Array> {
    (request: HttpRequest<StreamType>): Promise<HttpResponse<StreamType>>;
}
