import {_TopicConfiguration, _UnmarshalledTopicConfiguration} from './_TopicConfiguration';
import {_QueueConfiguration, _UnmarshalledQueueConfiguration} from './_QueueConfiguration';
import {_LambdaFunctionConfiguration, _UnmarshalledLambdaFunctionConfiguration} from './_LambdaFunctionConfiguration';

/**
 * _NotificationConfiguration shape
 */
export interface _NotificationConfiguration {
    /**
     * _TopicConfigurationList shape
     */
    TopicConfigurations?: Array<_TopicConfiguration>|Iterable<_TopicConfiguration>;

    /**
     * _QueueConfigurationList shape
     */
    QueueConfigurations?: Array<_QueueConfiguration>|Iterable<_QueueConfiguration>;

    /**
     * _LambdaFunctionConfigurationList shape
     */
    LambdaFunctionConfigurations?: Array<_LambdaFunctionConfiguration>|Iterable<_LambdaFunctionConfiguration>;
}

export interface _UnmarshalledNotificationConfiguration extends _NotificationConfiguration {
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
}