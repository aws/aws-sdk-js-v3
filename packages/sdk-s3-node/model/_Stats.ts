import {Structure as _Structure_} from '@aws-sdk/types';

export const _Stats: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        BytesScanned: {
            shape: {
                type: 'integer',
            },
        },
        BytesProcessed: {
            shape: {
                type: 'integer',
            },
        },
        BytesReturned: {
            shape: {
                type: 'integer',
            },
        },
    },
};