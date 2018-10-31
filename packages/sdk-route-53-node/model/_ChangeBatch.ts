import {_Changes} from './_Changes';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ChangeBatch: _Structure_ = {
    type: 'structure',
    required: [
        'Changes',
    ],
    members: {
        Comment: {
            shape: {
                type: 'string',
            },
        },
        Changes: {
            shape: _Changes,
        },
    },
};