import {Structure as _Structure_} from '@aws/types';

export const UpdateBatchPredictionInput: _Structure_ = {
    type: 'structure',
    required: [
        'BatchPredictionId',
        'BatchPredictionName',
    ],
    members: {
        BatchPredictionId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        BatchPredictionName: {
            shape: {
                type: 'string',
            },
        },
    },
};