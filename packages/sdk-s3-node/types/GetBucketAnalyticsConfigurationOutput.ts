import {_UnmarshalledAnalyticsConfiguration} from './_AnalyticsConfiguration';
import * as __aws_types from '@aws/types';

/**
 * GetBucketAnalyticsConfigurationOutput shape
 */
export interface GetBucketAnalyticsConfigurationOutput {
    /**
     * The configuration and any analyses for the analytics filter.
     */
    AnalyticsConfiguration?: _UnmarshalledAnalyticsConfiguration;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata?: __aws_types.ResponseMetadata;
}
