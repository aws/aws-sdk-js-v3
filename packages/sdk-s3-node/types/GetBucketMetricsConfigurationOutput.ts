import {_UnmarshalledMetricsConfiguration} from './_MetricsConfiguration';
import * as __aws_types from '@aws/types';

/**
 * GetBucketMetricsConfigurationOutput shape
 */
export interface GetBucketMetricsConfigurationOutput {
    /**
     * _MetricsConfiguration shape
     */
    MetricsConfiguration?: _UnmarshalledMetricsConfiguration;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
