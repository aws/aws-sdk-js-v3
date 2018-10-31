import {_UnmarshalledLifecycleRule} from './_LifecycleRule';
import * as __aws_types from '@aws-sdk/types';

/**
 * GetBucketLifecycleConfigurationOutput shape
 */
export interface GetBucketLifecycleConfigurationOutput {
    /**
     * _LifecycleRules shape
     */
    Rules?: Array<_UnmarshalledLifecycleRule>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
