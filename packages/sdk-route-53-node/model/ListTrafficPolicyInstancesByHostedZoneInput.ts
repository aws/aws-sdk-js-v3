import {Structure as _Structure_} from '@aws/types';

export const ListTrafficPolicyInstancesByHostedZoneInput: _Structure_ = {
    type: 'structure',
    required: [
        'HostedZoneId',
    ],
    members: {
        HostedZoneId: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'id',
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