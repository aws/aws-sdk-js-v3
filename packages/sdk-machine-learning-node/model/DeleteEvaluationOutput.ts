import {Structure as _Structure_} from '@aws/types';

export const DeleteEvaluationOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        EvaluationId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};