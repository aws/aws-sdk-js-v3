import {Structure as _Structure_} from '@aws/types';

export const ListVPCAssociationAuthorizationsInput: _Structure_ = {
    type: 'structure',
    required: [
        'HostedZoneId',
    ],
    members: {
        HostedZoneId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Id',
        },
        NextToken: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'nexttoken',
        },
        MaxResults: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'maxresults',
        },
    },
};