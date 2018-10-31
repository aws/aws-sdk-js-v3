import {_HostedZones} from './_HostedZones';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListHostedZonesOutput: _Structure_ = {
    type: 'structure',
    required: [
        'HostedZones',
        'Marker',
        'IsTruncated',
        'MaxItems',
    ],
    members: {
        HostedZones: {
            shape: _HostedZones,
        },
        Marker: {
            shape: {
                type: 'string',
            },
        },
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        NextMarker: {
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