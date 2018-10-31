import {_ChildHealthCheckList} from './_ChildHealthCheckList';
import {_HealthCheckRegionList} from './_HealthCheckRegionList';
import {_AlarmIdentifier} from './_AlarmIdentifier';
import {_ResettableElementNameList} from './_ResettableElementNameList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateHealthCheckInput: _Structure_ = {
    type: 'structure',
    required: [
        'HealthCheckId',
    ],
    members: {
        HealthCheckId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'HealthCheckId',
        },
        HealthCheckVersion: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
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
        FailureThreshold: {
            shape: {
                type: 'integer',
                min: 1,
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
        ResetElements: {
            shape: _ResettableElementNameList,
        },
    },
};