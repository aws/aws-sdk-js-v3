import {_UnmarshalledCopyPartResult} from './_CopyPartResult';
import * as __aws_types from '@aws/types';

/**
 * UploadPartCopyOutput shape
 */
export interface UploadPartCopyOutput {
    /**
     * <p>The version of the source object that was copied, if you have enabled versioning on the source bucket.</p>
     */
    CopySourceVersionId?: string;

    /**
     * _CopyPartResult shape
     */
    CopyPartResult?: _UnmarshalledCopyPartResult;

    /**
     * <p>The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).</p>
     */
    ServerSideEncryption?: 'AES256'|'aws:kms'|string;

    /**
     * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
     */
    SSECustomerAlgorithm?: string;

    /**
     * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.</p>
     */
    SSECustomerKeyMD5?: string;

    /**
     * <p>If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.</p>
     */
    SSEKMSKeyId?: string;

    /**
     * <p>If present, indicates that the requester was successfully charged for the request.</p>
     */
    RequestCharged?: 'requester'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
