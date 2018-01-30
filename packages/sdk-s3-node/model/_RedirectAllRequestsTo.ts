import {Structure as _Structure_} from '@aws/types';

export const _RedirectAllRequestsTo: _Structure_ = {
    type: 'structure',
    required: [
        'HostName',
    ],
    members: {
        HostName: {
            shape: {
                type: 'string',
            },
        },
        Protocol: {
            shape: {
                type: 'string',
            },
        },
    },
};