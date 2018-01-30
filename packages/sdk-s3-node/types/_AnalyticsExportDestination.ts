import {_AnalyticsS3BucketDestination, _UnmarshalledAnalyticsS3BucketDestination} from './_AnalyticsS3BucketDestination';

/**
 * _AnalyticsExportDestination shape
 */
export interface _AnalyticsExportDestination {
    /**
     * A destination signifying output to an S3 bucket.
     */
    S3BucketDestination: _AnalyticsS3BucketDestination;
}

export interface _UnmarshalledAnalyticsExportDestination extends _AnalyticsExportDestination {
    /**
     * A destination signifying output to an S3 bucket.
     */
    S3BucketDestination: _UnmarshalledAnalyticsS3BucketDestination;
}