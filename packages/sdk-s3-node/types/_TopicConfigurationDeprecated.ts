/**
 * _TopicConfigurationDeprecated shape
 */
export interface _TopicConfigurationDeprecated {
    /**
     * Optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.
     */
    Id?: string;

    /**
     * _EventList shape
     */
    Events?: Array<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>|Iterable<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>;

    /**
     * Bucket event for which to send notifications.
     */
    Event?: 's3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string;

    /**
     * Amazon SNS topic to which Amazon S3 will publish a message to report the specified events for the bucket.
     */
    Topic?: string;
}

export interface _UnmarshalledTopicConfigurationDeprecated extends _TopicConfigurationDeprecated {
    /**
     * _EventList shape
     */
    Events?: Array<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>;
}