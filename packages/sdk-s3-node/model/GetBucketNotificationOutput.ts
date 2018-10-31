import {_TopicConfigurationDeprecated} from './_TopicConfigurationDeprecated';
import {_QueueConfigurationDeprecated} from './_QueueConfigurationDeprecated';
import {_CloudFunctionConfiguration} from './_CloudFunctionConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetBucketNotificationOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TopicConfiguration: {
            shape: _TopicConfigurationDeprecated,
        },
        QueueConfiguration: {
            shape: _QueueConfigurationDeprecated,
        },
        CloudFunctionConfiguration: {
            shape: _CloudFunctionConfiguration,
        },
    },
};