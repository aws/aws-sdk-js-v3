import {HeaderBag} from './http';

export interface ResponseMetadata {
    statusCode: number;
    requestId?: string;
    extendedRequestId?: string;
    cfId?: string;
    responseHeaders: HeaderBag;
}

export interface MetadataBearer {
    $metadata: ResponseMetadata;
}
