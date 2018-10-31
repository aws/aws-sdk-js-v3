import {Structure as _Structure_} from '@aws-sdk/types';

export const GenerateRandomInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        NumberOfBytes: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};