import {Structure as _Structure_} from '@aws/types';

export const DeleteRealtimeEndpointInput: _Structure_ = {
    type: 'structure',
    required: [
        'MLModelId',
    ],
    members: {
        MLModelId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};