import {Structure as _Structure_} from '@aws-sdk/types';

export const _NoncurrentVersionTransition: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        NoncurrentDays: {
            shape: {
                type: 'integer',
            },
        },
        StorageClass: {
            shape: {
                type: 'string',
            },
        },
    },
};