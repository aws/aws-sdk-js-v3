import {_EventList} from './_EventList';
import {_NotificationConfigurationFilter} from './_NotificationConfigurationFilter';
import {Structure as _Structure_} from '@aws/types';

export const _QueueConfiguration: _Structure_ = {
    type: 'structure',
    required: [
        'QueueArn',
        'Events',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        QueueArn: {
            shape: {
                type: 'string',
            },
            locationName: 'Queue',
        },
        Events: {
            shape: _EventList,
            locationName: 'Event',
        },
        Filter: {
            shape: _NotificationConfigurationFilter,
        },
    },
};