import {_AnalyticsS3BucketDestination, _UnmarshalledAnalyticsS3BucketDestination} from './_AnalyticsS3BucketDestination';

/**
 * _AnalyticsExportDestination shape
 */
export interface _AnalyticsExportDestination {
    /**
     * _AnalyticsS3BucketDestination shape
     */
    S3BucketDestination: _AnalyticsS3BucketDestination;
}

export interface _UnmarshalledAnalyticsExportDestination extends _AnalyticsExportDestination {
    /**
     * _AnalyticsS3BucketDestination shape
     */
    S3BucketDestination: _UnmarshalledAnalyticsS3BucketDestination;
}