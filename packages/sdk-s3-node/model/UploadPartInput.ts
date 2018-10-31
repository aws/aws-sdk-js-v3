import {Structure as _Structure_} from '@aws-sdk/types';

export const UploadPartInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Key',
        'PartNumber',
        'UploadId',
    ],
    members: {
        Body: {
            shape: {
                type: 'blob',
            },
            streaming: true,
        },
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        ContentLength: {
            shape: {
                type: 'integer',
            },
            location: 'header',
            locationName: 'Content-Length',
        },
        ContentMD5: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-MD5',
        },
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Key',
        },
        PartNumber: {
            shape: {
                type: 'integer',
            },
            location: 'querystring',
            locationName: 'partNumber',
        },
        UploadId: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'uploadId',
        },
        SSECustomerAlgorithm: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-customer-algorithm',
        },
        SSECustomerKey: {
            shape: {
                type: 'string',
                sensitive: true,
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-customer-key',
        },
        SSECustomerKeyMD5: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-customer-key-MD5',
        },
        RequestPayer: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-payer',
        },
    },
    payload: 'Body',
};