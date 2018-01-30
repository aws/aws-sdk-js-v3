import {Structure as _Structure_} from '@aws/types';

export const _NoncurrentVersionExpiration: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        NoncurrentDays: {
            shape: {
                type: 'integer',
            },
        },
    },
};