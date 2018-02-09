import {Structure as _Structure_} from '@aws/types';

export const _Tag: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Key: {
            shape: {
                type: 'string',
            },
        },
        Value: {
            shape: {
                type: 'string',
            },
        },
    },
};