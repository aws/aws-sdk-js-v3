import {_UnmarshalledOwner} from './_Owner';
import {_UnmarshalledGrant} from './_Grant';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * GetBucketAclOutput shape
 */
export interface GetBucketAclOutput {
    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;

    /**
     * A list of grants.
     */
    Grants?: Array<_UnmarshalledGrant>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}