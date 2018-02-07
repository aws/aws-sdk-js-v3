import {Structure as _Structure_} from '@aws/types';

export const _HostedZoneConfig: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Comment: {
            shape: {
                type: 'string',
            },
        },
        PrivateZone: {
            shape: {
                type: 'boolean',
            },
        },
    },
};