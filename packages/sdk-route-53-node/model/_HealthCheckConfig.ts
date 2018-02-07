import {_ChildHealthCheckList} from './_ChildHealthCheckList';
import {_HealthCheckRegionList} from './_HealthCheckRegionList';
import {_AlarmIdentifier} from './_AlarmIdentifier';
import {Structure as _Structure_} from '@aws/types';

export const _HealthCheckConfig: _Structure_ = {
    type: 'structure',
    required: [
        'Type',
    ],
    members: {
        IPAddress: {
            shape: {
                type: 'string',
            },
        },
        Port: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        Type: {
            shape: {
                type: 'string',
            },
        },
        ResourcePath: {
            shape: {
                type: 'string',
            },
        },
        FullyQualifiedDomainName: {
            shape: {
                type: 'string',
            },
        },
        SearchString: {
            shape: {
                type: 'string',
            },
        },
        RequestInterval: {
            shape: {
                type: 'integer',
                min: 10,
            },
        },
        FailureThreshold: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        MeasureLatency: {
            shape: {
                type: 'boolean',
            },
        },
        Inverted: {
            shape: {
                type: 'boolean',
            },
        },
        HealthThreshold: {
            shape: {
                type: 'integer',
            },
        },
        ChildHealthChecks: {
            shape: _ChildHealthCheckList,
        },
        EnableSNI: {
            shape: {
                type: 'boolean',
            },
        },
        Regions: {
            shape: _HealthCheckRegionList,
        },
        AlarmIdentifier: {
            shape: _AlarmIdentifier,
        },
        InsufficientDataHealthStatus: {
            shape: {
                type: 'string',
            },
        },
    },
};