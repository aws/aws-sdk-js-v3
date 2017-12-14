import {Structure as _Structure_} from '@aws/types';

export const CancelKeyDeletionOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};