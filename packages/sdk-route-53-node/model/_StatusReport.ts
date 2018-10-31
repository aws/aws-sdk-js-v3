import {Structure as _Structure_} from '@aws-sdk/types';

export const _StatusReport: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Status: {
            shape: {
                type: 'string',
            },
        },
        CheckedTime: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};