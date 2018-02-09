import {_TrafficPolicySummaries} from './_TrafficPolicySummaries';
import {Structure as _Structure_} from '@aws/types';

export const ListTrafficPoliciesOutput: _Structure_ = {
    type: 'structure',
    required: [
        'TrafficPolicySummaries',
        'IsTruncated',
        'TrafficPolicyIdMarker',
        'MaxItems',
    ],
    members: {
        TrafficPolicySummaries: {
            shape: _TrafficPolicySummaries,
        },
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        TrafficPolicyIdMarker: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        MaxItems: {
            shape: {
                type: 'string',
            },
        },
    },
};