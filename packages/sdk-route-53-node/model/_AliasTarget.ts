import {Structure as _Structure_} from '@aws/types';

export const _AliasTarget: _Structure_ = {
    type: 'structure',
    required: [
        'HostedZoneId',
        'DNSName',
        'EvaluateTargetHealth',
    ],
    members: {
        HostedZoneId: {
            shape: {
                type: 'string',
            },
        },
        DNSName: {
            shape: {
                type: 'string',
            },
        },
        EvaluateTargetHealth: {
            shape: {
                type: 'boolean',
            },
        },
    },
};