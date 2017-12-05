import {Structure as _Structure_} from '@aws/types';

export const GetKeyPolicyInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
        'PolicyName',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        PolicyName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};