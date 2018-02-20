import {_UnmarshalledAnalyticsConfiguration} from './_AnalyticsConfiguration';
import * as __aws_types from '@aws/types';

/**
 * GetBucketAnalyticsConfigurationOutput shape
 */
export interface GetBucketAnalyticsConfigurationOutput {
    /**
     * _AnalyticsConfiguration shape
     */
    AnalyticsConfiguration?: _UnmarshalledAnalyticsConfiguration;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
