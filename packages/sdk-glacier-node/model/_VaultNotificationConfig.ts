import {_NotificationEventList} from './_NotificationEventList';
import {Structure as _Structure_} from '@aws/types';

export const _VaultNotificationConfig: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        SNSTopic: {
            shape: {
                type: 'string',
            },
        },
        Events: {
            shape: _NotificationEventList,
        },
    },
};