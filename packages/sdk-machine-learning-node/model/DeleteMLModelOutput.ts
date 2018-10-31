import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteMLModelOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        MLModelId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};