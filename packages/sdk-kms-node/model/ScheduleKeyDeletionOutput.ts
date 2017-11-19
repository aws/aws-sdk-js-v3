import {Structure as _Structure_} from '@aws/types';

export const ScheduleKeyDeletionOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DeletionDate: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};