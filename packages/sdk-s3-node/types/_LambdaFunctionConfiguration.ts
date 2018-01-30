import {_NotificationConfigurationFilter, _UnmarshalledNotificationConfigurationFilter} from './_NotificationConfigurationFilter';

/**
 * Container for specifying the AWS Lambda notification configuration.
 */
export interface _LambdaFunctionConfiguration {
    /**
     * Optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.
     */
    Id?: string;

    /**
     * Lambda cloud function ARN that Amazon S3 can invoke when it detects events of the specified type.
     */
    LambdaFunctionArn: string;

    /**
     * _EventList shape
     */
    Events: Array<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>|Iterable<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>;

    /**
     * Container for object key name filtering rules. For information about key name filtering, go to <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the Amazon Simple Storage Service Developer Guide.
     */
    Filter?: _NotificationConfigurationFilter;
}

export interface _UnmarshalledLambdaFunctionConfiguration extends _LambdaFunctionConfiguration {
    /**
     * _EventList shape
     */
    Events: Array<'s3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|string>;

    /**
     * Container for object key name filtering rules. For information about key name filtering, go to <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the Amazon Simple Storage Service Developer Guide.
     */
    Filter?: _UnmarshalledNotificationConfigurationFilter;
}