import {HeaderBag} from './http';

export interface ResponseMetadata {
    statusCode: number;
    responseHeaders: HeaderBag;
    requestId?: string;
    extendedRequestId?: string;
    cfId?: string;
}

export interface MetadataBearer {
    $metadata: ResponseMetadata;
}
