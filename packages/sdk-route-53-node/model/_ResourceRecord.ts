import {Structure as _Structure_} from '@aws/types';

export const _ResourceRecord: _Structure_ = {
    type: 'structure',
    required: [
        'Value',
    ],
    members: {
        Value: {
            shape: {
                type: 'string',
            },
        },
    },
};