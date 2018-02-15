import * as __aws_types from '@aws/types';

/**
 * UploadPartOutput shape
 */
export interface UploadPartOutput {
    /**
     * _ServerSideEncryption shape
     */
    ServerSideEncryption?: 'AES256'|'aws:kms'|string;

    /**
     * _ETag shape
     */
    ETag?: string;

    /**
     * _SSECustomerAlgorithm shape
     */
    SSECustomerAlgorithm?: string;

    /**
     * _SSECustomerKeyMD5 shape
     */
    SSECustomerKeyMD5?: string;

    /**
     * _SSEKMSKeyId shape
     */
    SSEKMSKeyId?: string;

    /**
     * _RequestCharged shape
     */
    RequestCharged?: 'requester'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
