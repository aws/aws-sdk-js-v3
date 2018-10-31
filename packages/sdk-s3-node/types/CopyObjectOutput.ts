import {_UnmarshalledCopyObjectResult} from './_CopyObjectResult';
import * as __aws_types from '@aws-sdk/types';

/**
 * CopyObjectOutput shape
 */
export interface CopyObjectOutput {
    /**
     * _CopyObjectResult shape
     */
    CopyObjectResult?: _UnmarshalledCopyObjectResult;

    /**
     * <p>If the object expiration is configured, the response includes this header.</p>
     */
    Expiration?: string;

    /**
     * _CopySourceVersionId shape
     */
    CopySourceVersionId?: string;

    /**
     * <p>Version ID of the newly created copy.</p>
     */
    VersionId?: string;

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
