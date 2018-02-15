import {_NotificationConfigurationFilter, _UnmarshalledNotificationConfigurationFilter} from './_NotificationConfigurationFilter';

/**
 * _QueueConfiguration shape
 */
export interface _QueueConfiguration {
    /**
     * _NotificationId shape
     */
    Id?: string;

    /**
     * _QueueArn shape
     */
    QueueArn: string;

    /**
     * _EventList shape
     */
    Events: Array<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>|Iterable<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>;

    /**
     * _NotificationConfigurationFilter shape
     */
    Filter?: _NotificationConfigurationFilter;
}

export interface _UnmarshalledQueueConfiguration extends _QueueConfiguration {
    /**
     * _EventList shape
     */
    Events: Array<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>;

    /**
     * _NotificationConfigurationFilter shape
     */
    Filter?: _UnmarshalledNotificationConfigurationFilter;
}