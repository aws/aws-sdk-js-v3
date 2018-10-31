import {_UnmarshalledTopicConfiguration} from './_TopicConfiguration';
import {_UnmarshalledQueueConfiguration} from './_QueueConfiguration';
import {_UnmarshalledLambdaFunctionConfiguration} from './_LambdaFunctionConfiguration';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>Container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off on the bucket.</p>
 */
export interface GetBucketNotificationConfigurationOutput {
    /**
     * _TopicConfigurationList shape
     */
    TopicConfigurations?: Array<_UnmarshalledTopicConfiguration>;

    /**
     * _QueueConfigurationList shape
     */
    QueueConfigurations?: Array<_UnmarshalledQueueConfiguration>;

    /**
     * _LambdaFunctionConfigurationList shape
     */
    LambdaFunctionConfigurations?: Array<_UnmarshalledLambdaFunctionConfiguration>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
