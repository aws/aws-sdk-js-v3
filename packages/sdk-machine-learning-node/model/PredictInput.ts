import {_Record} from './_Record';
import {Structure as _Structure_} from '@aws/types';

export const PredictInput: _Structure_ = {
    type: 'structure',
    required: [
        'MLModelId',
        'Record',
        'PredictEndpoint',
    ],
    members: {
        MLModelId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Record: {
            shape: _Record,
        },
        PredictEndpoint: {
            shape: {
                type: 'string',
            },
        },
    },
};