import {_UnmarshalledAnalyticsConfiguration} from './_AnalyticsConfiguration';
import * as __aws_types from '@aws/types';

/**
 * ListBucketAnalyticsConfigurationsOutput shape
 */
export interface ListBucketAnalyticsConfigurationsOutput {
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
     * _AnalyticsConfigurationList shape
     */
    AnalyticsConfigurationList?: Array<_UnmarshalledAnalyticsConfiguration>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
