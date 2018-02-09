import {_HostedZones} from './_HostedZones';
import {Structure as _Structure_} from '@aws/types';

export const ListHostedZonesByNameOutput: _Structure_ = {
    type: 'structure',
    required: [
        'HostedZones',
        'IsTruncated',
        'MaxItems',
    ],
    members: {
        HostedZones: {
            shape: _HostedZones,
        },
        DNSName: {
            shape: {
                type: 'string',
            },
        },
        HostedZoneId: {
            shape: {
                type: 'string',
            },
        },
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        NextDNSName: {
            shape: {
                type: 'string',
            },
        },
        NextHostedZoneId: {
            shape: {
                type: 'string',
            },
        },
        MaxItems: {
            shape: {
                type: 'string',
            },
        },
    },
};