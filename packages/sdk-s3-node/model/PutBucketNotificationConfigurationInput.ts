import {_NotificationConfiguration} from './_NotificationConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutBucketNotificationConfigurationInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'NotificationConfiguration',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        NotificationConfiguration: {
            shape: _NotificationConfiguration,
            locationName: 'NotificationConfiguration',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
    },
    payload: 'NotificationConfiguration',
};