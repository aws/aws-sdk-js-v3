import {_TopicConfigurationDeprecated, _UnmarshalledTopicConfigurationDeprecated} from './_TopicConfigurationDeprecated';
import {_QueueConfigurationDeprecated, _UnmarshalledQueueConfigurationDeprecated} from './_QueueConfigurationDeprecated';
import {_CloudFunctionConfiguration, _UnmarshalledCloudFunctionConfiguration} from './_CloudFunctionConfiguration';

/**
 * _NotificationConfigurationDeprecated shape
 */
export interface _NotificationConfigurationDeprecated {
    /**
     * _TopicConfigurationDeprecated shape
     */
    TopicConfiguration?: _TopicConfigurationDeprecated;

    /**
     * _QueueConfigurationDeprecated shape
     */
    QueueConfiguration?: _QueueConfigurationDeprecated;

    /**
     * _CloudFunctionConfiguration shape
     */
    CloudFunctionConfiguration?: _CloudFunctionConfiguration;
}

export interface _UnmarshalledNotificationConfigurationDeprecated extends _NotificationConfigurationDeprecated {
    /**
     * _TopicConfigurationDeprecated shape
     */
    TopicConfiguration?: _UnmarshalledTopicConfigurationDeprecated;

    /**
     * _QueueConfigurationDeprecated shape
     */
    QueueConfiguration?: _UnmarshalledQueueConfigurationDeprecated;

    /**
     * _CloudFunctionConfiguration shape
     */
    CloudFunctionConfiguration?: _UnmarshalledCloudFunctionConfiguration;
}