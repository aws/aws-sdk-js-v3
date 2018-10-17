/**
 * _AnalyticsS3BucketDestination shape
 */
export interface _AnalyticsS3BucketDestination {
    /**
     * <p>The file format used when exporting data to Amazon S3.</p>
     */
    Format: 'CSV'|string;

    /**
     * <p>The account ID that owns the destination bucket. If no account ID is provided, the owner will not be validated prior to exporting data.</p>
     */
    BucketAccountId?: string;

    /**
     * <p>The Amazon resource name (ARN) of the bucket to which data is exported.</p>
     */
    Bucket: string;

    /**
     * <p>The prefix to use when exporting data. The exported data begins with this prefix.</p>
     */
    Prefix?: string;
}

export type _UnmarshalledAnalyticsS3BucketDestination = _AnalyticsS3BucketDestination;