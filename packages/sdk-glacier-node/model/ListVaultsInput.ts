import {Structure as _Structure_} from '@aws/types';

export const ListVaultsInput: _Structure_ = {
    type: 'structure',
    required: [
        'accountId',
    ],
    members: {
        accountId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'accountId',
        },
        marker: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'marker',
        },
        limit: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'limit',
        },
    },
};