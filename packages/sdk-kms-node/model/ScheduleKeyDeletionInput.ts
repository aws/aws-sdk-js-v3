import {Structure as _Structure_} from '@aws/types';

export const ScheduleKeyDeletionInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        PendingWindowInDays: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};