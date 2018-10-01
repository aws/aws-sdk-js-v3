import * as __aws_types from '@aws/types';

/**
 * GenerateDataKeyWithoutPlaintextOutput shape
 */
export interface GenerateDataKeyWithoutPlaintextOutput {
    /**
     * <p>The encrypted data encryption key. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not encoded.</p>
     */
    CiphertextBlob?: Uint8Array;

    /**
     * <p>The identifier of the CMK under which the data encryption key was generated and encrypted.</p>
     */
    KeyId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
