import {HeaderBag, HttpResponse} from './http';

export interface ResponseMetadata {
    httpResponse: HttpResponse;
    requestId?: string;
    extendedRequestId?: string;
    cfId?: string;
}

export interface MetadataBearer {
    $metadata: ResponseMetadata;
}
