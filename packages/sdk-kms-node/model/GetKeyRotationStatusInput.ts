import {Structure as _Structure_} from '@aws/types';

export const GetKeyRotationStatusInput: _Structure_ = {
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
    },
};