import {Structure as _Structure_} from '@aws-sdk/types';

export const PutKeyPolicyInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
        'PolicyName',
        'Policy',
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
        Policy: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        BypassPolicyLockoutSafetyCheck: {
            shape: {
                type: 'boolean',
            },
        },
    },
};