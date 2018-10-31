import {Structure as _Structure_} from '@aws-sdk/types';

export const GetKeyPolicyOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Policy: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};