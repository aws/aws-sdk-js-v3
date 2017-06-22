export interface ResponseHeaders {
    readonly [index: string]: Array<string>;
}

export interface ResponseMetadata {
    statusCode: number;
    requestId?: string;
    extendedRequestId?: string;
    cfId?: string;
    responseHeaders: ResponseHeaders;
}
