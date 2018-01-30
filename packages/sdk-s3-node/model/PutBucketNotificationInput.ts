import {_NotificationConfigurationDeprecated} from './_NotificationConfigurationDeprecated';
import {Structure as _Structure_} from '@aws/types';

export const PutBucketNotificationInput: _Structure_ = {
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
        ContentMD5: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-MD5',
        },
        NotificationConfiguration: {
            shape: _NotificationConfigurationDeprecated,
            locationName: 'NotificationConfiguration',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
    },
    payload: 'NotificationConfiguration',
};