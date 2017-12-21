import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * GetKeyPolicyOutput shape
 */
export interface GetKeyPolicyOutput {
    /**
     * <p>A policy document in JSON format.</p>
     */
    Policy?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}