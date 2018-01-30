import {_NotificationConfigurationFilter, _UnmarshalledNotificationConfigurationFilter} from './_NotificationConfigurationFilter';

/**
 * Container for specifying the configuration when you want Amazon S3 to publish events to an Amazon Simple Notification Service (Amazon SNS) topic.
 */
export interface _TopicConfiguration {
    /**
     * Optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.
     */
    Id?: string;

    /**
     * Amazon SNS topic ARN to which Amazon S3 will publish a message when it detects events of specified type.
     */
    TopicArn: string;

    /**
     * _EventList shape
     */
    Events: Array<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>|Iterable<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>;

    /**
     * Container for object key name filtering rules. For information about key name filtering, go to <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the Amazon Simple Storage Service Developer Guide.
     */
    Filter?: _NotificationConfigurationFilter;
}

export interface _UnmarshalledTopicConfiguration extends _TopicConfiguration {
    /**
     * _EventList shape
     */
    Events: Array<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>;

    /**
     * Container for object key name filtering rules. For information about key name filtering, go to <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the Amazon Simple Storage Service Developer Guide.
     */
    Filter?: _UnmarshalledNotificationConfigurationFilter;
}