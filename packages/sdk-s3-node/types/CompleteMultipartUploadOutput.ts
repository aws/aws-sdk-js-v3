import * as __aws_types from '@aws/types';

/**
 * CompleteMultipartUploadOutput shape
 */
export interface CompleteMultipartUploadOutput {
    /**
     * _Location shape
     */
    Location?: string;

    /**
     * _BucketName shape
     */
    Bucket?: string;

    /**
     * _ObjectKey shape
     */
    Key?: string;

    /**
     * _Expiration shape
     */
    Expiration?: string;

    /**
     * _ETag shape
     */
    ETag?: string;

    /**
     * _ServerSideEncryption shape
     */
    ServerSideEncryption?: 'AES256'|'aws:kms'|string;

    /**
     * _ObjectVersionId shape
     */
    VersionId?: string;

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
