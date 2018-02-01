import {Structure as _Structure_} from '@aws/types';

export const ListHostedZonesByNameInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        DNSName: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'dnsname',
        },
        HostedZoneId: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'hostedzoneid',
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