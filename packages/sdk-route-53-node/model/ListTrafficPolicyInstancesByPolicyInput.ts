import {Structure as _Structure_} from '@aws/types';

export const ListTrafficPolicyInstancesByPolicyInput: _Structure_ = {
    type: 'structure',
    required: [
        'TrafficPolicyId',
        'TrafficPolicyVersion',
    ],
    members: {
        TrafficPolicyId: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'querystring',
            locationName: 'id',
        },
        TrafficPolicyVersion: {
            shape: {
                type: 'integer',
                min: 1,
            },
            location: 'querystring',
            locationName: 'version',
        },
        HostedZoneIdMarker: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'hostedzoneid',
        },
        TrafficPolicyInstanceNameMarker: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'trafficpolicyinstancename',
        },
        TrafficPolicyInstanceTypeMarker: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'trafficpolicyinstancetype',
        },
        MaxItems: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'maxitems',
        },
    },
};