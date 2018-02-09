import {_HealthChecks} from './_HealthChecks';
import {Structure as _Structure_} from '@aws/types';

export const ListHealthChecksOutput: _Structure_ = {
    type: 'structure',
    required: [
        'HealthChecks',
        'Marker',
        'IsTruncated',
        'MaxItems',
    ],
    members: {
        HealthChecks: {
            shape: _HealthChecks,
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