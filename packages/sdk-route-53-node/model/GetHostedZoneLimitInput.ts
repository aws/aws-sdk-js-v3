import {Structure as _Structure_} from '@aws-sdk/types';

export const GetHostedZoneLimitInput: _Structure_ = {
    type: 'structure',
    required: [
        'Type',
        'HostedZoneId',
    ],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Type',
        },
        HostedZoneId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Id',
        },
    },
};