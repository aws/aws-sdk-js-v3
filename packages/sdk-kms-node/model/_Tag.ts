import {Structure as _Structure_} from '@aws-sdk/types';

export const _Tag: _Structure_ = {
    type: 'structure',
    required: [
        'TagKey',
        'TagValue',
    ],
    members: {
        TagKey: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        TagValue: {
            shape: {
                type: 'string',
            },
        },
    },
};