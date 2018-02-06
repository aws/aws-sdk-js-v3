import * as __aws_types from '@aws/types';

/**
 * RestoreObjectOutput shape
 */
export interface RestoreObjectOutput {
    /**
     * If present, indicates that the requester was successfully charged for the request.
     */
    RequestCharged?: 'requester'|string;

    /**
     * Indicates the path in the provided S3 output location where Select results will be restored to.
     */
    RestoreOutputPath?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata?: __aws_types.ResponseMetadata;
}
