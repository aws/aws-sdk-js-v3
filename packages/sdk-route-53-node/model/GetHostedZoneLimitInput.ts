import {Structure as _Structure_} from '@aws/types';

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