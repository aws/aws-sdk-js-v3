import {_UnmarshalledCopyPartResult} from './_CopyPartResult';
import * as __aws_types from '@aws/types';

/**
 * UploadPartCopyOutput shape
 */
export interface UploadPartCopyOutput {
    /**
     * The version of the source object that was copied, if you have enabled versioning on the source bucket.
     */
    CopySourceVersionId?: string;

    /**
     * _CopyPartResult shape
     */
    CopyPartResult?: _UnmarshalledCopyPartResult;

    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: 'AES256'|'aws:kms'|string;

    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: string;

    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: string;

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
    $metadata?: __aws_types.ResponseMetadata;
}
