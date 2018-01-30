import {Structure as _Structure_} from '@aws/types';

export const _GlacierJobParameters: _Structure_ = {
    type: 'structure',
    required: [
        'Tier',
    ],
    members: {
        Tier: {
            shape: {
                type: 'string',
            },
        },
    },
};