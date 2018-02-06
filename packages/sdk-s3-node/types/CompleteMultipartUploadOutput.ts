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
     * If the object expiration is configured, this will contain the expiration date (expiry-date) and rule ID (rule-id). The value of rule-id is URL encoded.
     */
    Expiration?: string;

    /**
     * Entity tag of the object.
     */
    ETag?: string;

    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: 'AES256'|'aws:kms'|string;

    /**
     * Version of the object.
     */
    VersionId?: string;

    /**
     * If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.
     */
    SSEKMSKeyId?: string;

    /**
     * If present, indicates that the requester was successfully charged for the request.
     */
    RequestCharged?: 'requester'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
