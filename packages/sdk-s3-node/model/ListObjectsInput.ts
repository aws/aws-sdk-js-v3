import {Structure as _Structure_} from '@aws-sdk/types';

export const ListObjectsInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        Delimiter: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'delimiter',
        },
        EncodingType: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'encoding-type',
        },
        Marker: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'marker',
        },
        MaxKeys: {
            shape: {
                type: 'integer',
            },
            location: 'querystring',
            locationName: 'max-keys',
        },
        Prefix: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'prefix',
        },
        RequestPayer: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-payer',
        },
    },
};