import {_UnmarshalledMetricsConfiguration} from './_MetricsConfiguration';
import * as __aws_types from '@aws/types';

/**
 * ListBucketMetricsConfigurationsOutput shape
 */
export interface ListBucketMetricsConfigurationsOutput {
    /**
     * _IsTruncated shape
     */
    IsTruncated?: boolean;

    /**
     * _Token shape
     */
    ContinuationToken?: string;

    /**
     * _NextToken shape
     */
    NextContinuationToken?: string;

    /**
     * _MetricsConfigurationList shape
     */
    MetricsConfigurationList?: Array<_UnmarshalledMetricsConfiguration>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
