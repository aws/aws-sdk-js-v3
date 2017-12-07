import {_UnmarshalledKeyMetadata} from './_KeyMetadata';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * DescribeKeyOutput shape
 */
export interface DescribeKeyOutput {
    /**
     * <p>Metadata associated with the key.</p>
     */
    KeyMetadata?: _UnmarshalledKeyMetadata;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}