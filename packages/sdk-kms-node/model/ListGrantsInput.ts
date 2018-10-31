import {Structure as _Structure_} from '@aws-sdk/types';

export const ListGrantsInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
    ],
    members: {
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        Marker: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};