import {Structure as _Structure_} from '@aws-sdk/types';

export const _AccountLimit: _Structure_ = {
    type: 'structure',
    required: [
        'Type',
        'Value',
    ],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
        },
        Value: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};