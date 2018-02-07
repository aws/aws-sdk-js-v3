import {Structure as _Structure_} from '@aws/types';

export const _AlarmIdentifier: _Structure_ = {
    type: 'structure',
    required: [
        'Region',
        'Name',
    ],
    members: {
        Region: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Name: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};