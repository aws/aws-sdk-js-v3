import {_UnmarshalledMetricsConfiguration} from './_MetricsConfiguration';
import * as __aws_types from '@aws/types';

/**
 * ListBucketMetricsConfigurationsOutput shape
 */
export interface ListBucketMetricsConfigurationsOutput {
    /**
     * Indicates whether the returned list of metrics configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent request.
     */
    IsTruncated?: boolean;

    /**
     * The marker that is used as a starting point for this metrics configuration list response. This value is present if it was sent in the request.
     */
    ContinuationToken?: string;

    /**
     * The marker used to continue a metrics configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.
     */
    NextContinuationToken?: string;

    /**
     * The list of metrics configurations for a bucket.
     */
    MetricsConfigurationList?: Array<_UnmarshalledMetricsConfiguration>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata?: __aws_types.ResponseMetadata;
}
