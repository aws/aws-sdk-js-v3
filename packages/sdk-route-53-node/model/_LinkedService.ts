import {Structure as _Structure_} from '@aws-sdk/types';

export const _LinkedService: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ServicePrincipal: {
            shape: {
                type: 'string',
            },
        },
        Description: {
            shape: {
                type: 'string',
            },
        },
    },
};