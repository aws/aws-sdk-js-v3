import {_TrafficPolicies} from './_TrafficPolicies';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListTrafficPolicyVersionsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'TrafficPolicies',
        'IsTruncated',
        'TrafficPolicyVersionMarker',
        'MaxItems',
    ],
    members: {
        TrafficPolicies: {
            shape: _TrafficPolicies,
        },
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        TrafficPolicyVersionMarker: {
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