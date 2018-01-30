import {_UnmarshalledMetricsConfiguration} from './_MetricsConfiguration';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * GetBucketMetricsConfigurationOutput shape
 */
export interface GetBucketMetricsConfigurationOutput {
    /**
     * Specifies the metrics configuration.
     */
    MetricsConfiguration?: _UnmarshalledMetricsConfiguration;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}