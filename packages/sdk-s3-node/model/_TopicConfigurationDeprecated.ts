import {_EventList} from './_EventList';
import {Structure as _Structure_} from '@aws/types';

export const _TopicConfigurationDeprecated: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        Events: {
            shape: _EventList,
            locationName: 'Event',
        },
        Event: {
            shape: {
                type: 'string',
            },
        },
        Topic: {
            shape: {
                type: 'string',
            },
        },
    },
};