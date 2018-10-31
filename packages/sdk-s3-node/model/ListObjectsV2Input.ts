import {Structure as _Structure_} from '@aws-sdk/types';

export const ListObjectsV2Input: _Structure_ = {
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
        ContinuationToken: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'continuation-token',
        },
        FetchOwner: {
            shape: {
                type: 'boolean',
            },
            location: 'querystring',
            locationName: 'fetch-owner',
        },
        StartAfter: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'start-after',
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