import {_UnmarshalledCORSRule} from './_CORSRule';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * GetBucketCorsOutput shape
 */
export interface GetBucketCorsOutput {
    /**
     * _CORSRules shape
     */
    CORSRules?: Array<_UnmarshalledCORSRule>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}