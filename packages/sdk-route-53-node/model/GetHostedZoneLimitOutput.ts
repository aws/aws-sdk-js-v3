import {_HostedZoneLimit} from './_HostedZoneLimit';
import {Structure as _Structure_} from '@aws/types';

export const GetHostedZoneLimitOutput: _Structure_ = {
    type: 'structure',
    required: [
        'Limit',
        'Count',
    ],
    members: {
        Limit: {
            shape: _HostedZoneLimit,
        },
        Count: {
            shape: {
                type: 'integer',
            },
        },
    },
};