import {_UnmarshalledAnalyticsConfiguration} from './_AnalyticsConfiguration';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * ListBucketAnalyticsConfigurationsOutput shape
 */
export interface ListBucketAnalyticsConfigurationsOutput {
    /**
     * Indicates whether the returned list of analytics configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent request.
     */
    IsTruncated?: boolean;

    /**
     * The ContinuationToken that represents where this request began.
     */
    ContinuationToken?: string;

    /**
     * NextContinuationToken is sent when isTruncated is true, which indicates that there are more analytics configurations to list. The next request must include this NextContinuationToken. The token is obfuscated and is not a usable value.
     */
    NextContinuationToken?: string;

    /**
     * The list of analytics configurations for a bucket.
     */
    AnalyticsConfigurationList?: Array<_UnmarshalledAnalyticsConfiguration>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}