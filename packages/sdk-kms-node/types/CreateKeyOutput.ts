import {_UnmarshalledKeyMetadata} from './_KeyMetadata';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * CreateKeyOutput shape
 */
export interface CreateKeyOutput {
    /**
     * <p>Metadata associated with the CMK.</p>
     */
    KeyMetadata?: _UnmarshalledKeyMetadata;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}