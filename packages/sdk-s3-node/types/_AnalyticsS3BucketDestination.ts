/**
 * _AnalyticsS3BucketDestination shape
 */
export interface _AnalyticsS3BucketDestination {
    /**
     * The file format used when exporting data to Amazon S3.
     */
    Format: 'CSV'|string;

    /**
     * The account ID that owns the destination bucket. If no account ID is provided, the owner will not be validated prior to exporting data.
     */
    BucketAccountId?: string;

    /**
     * The Amazon resource name (ARN) of the bucket to which data is exported.
     */
    Bucket: string;

    /**
     * The prefix to use when exporting data. The exported data begins with this prefix.
     */
    Prefix?: string;
}

export type _UnmarshalledAnalyticsS3BucketDestination = _AnalyticsS3BucketDestination;