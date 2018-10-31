import {Structure as _Structure_} from '@aws-sdk/types';

export const GenerateRandomOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Plaintext: {
            shape: {
                type: 'blob',
                sensitive: true,
            },
        },
    },
};