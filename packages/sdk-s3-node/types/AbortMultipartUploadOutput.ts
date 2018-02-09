import * as __aws_types from '@aws/types';

/**
 * AbortMultipartUploadOutput shape
 */
export interface AbortMultipartUploadOutput {
    /**
     * If present, indicates that the requester was successfully charged for the request.
     */
    RequestCharged?: 'requester'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
