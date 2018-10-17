import * as __aws_types from '@aws/types';

/**
 * AbortMultipartUploadOutput shape
 */
export interface AbortMultipartUploadOutput {
    /**
     * <p>If present, indicates that the requester was successfully charged for the request.</p>
     */
    RequestCharged?: 'requester'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
