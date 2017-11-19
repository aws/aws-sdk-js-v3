import {Structure as _Structure_} from '@aws/types';

export const RevokeGrantInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
        'GrantId',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        GrantId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};