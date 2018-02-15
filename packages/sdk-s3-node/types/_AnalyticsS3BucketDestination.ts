/**
 * _AnalyticsS3BucketDestination shape
 */
export interface _AnalyticsS3BucketDestination {
    /**
     * _AnalyticsS3ExportFileFormat shape
     */
    Format: 'CSV'|string;

    /**
     * _AccountId shape
     */
    BucketAccountId?: string;

    /**
     * _BucketName shape
     */
    Bucket: string;

    /**
     * _Prefix shape
     */
    Prefix?: string;
}

export type _UnmarshalledAnalyticsS3BucketDestination = _AnalyticsS3BucketDestination;