import {_UnmarshalledBucket} from './_Bucket';
import {_UnmarshalledOwner} from './_Owner';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * ListBucketsOutput shape
 */
export interface ListBucketsOutput {
    /**
     * _Buckets shape
     */
    Buckets?: Array<_UnmarshalledBucket>;

    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}