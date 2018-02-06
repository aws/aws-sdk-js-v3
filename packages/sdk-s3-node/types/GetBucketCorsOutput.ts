import {_UnmarshalledCORSRule} from './_CORSRule';
import * as __aws_types from '@aws/types';

/**
 * GetBucketCorsOutput shape
 */
export interface GetBucketCorsOutput {
    /**
     * _CORSRules shape
     */
    CORSRules?: Array<_UnmarshalledCORSRule>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata?: __aws_types.ResponseMetadata;
}
