import {Structure as _Structure_} from '@aws/types';

export const UploadPartOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ServerSideEncryption: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption',
        },
        ETag: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'ETag',
        },
        SSECustomerAlgorithm: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-customer-algorithm',
        },
        SSECustomerKeyMD5: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-customer-key-MD5',
        },
        SSEKMSKeyId: {
            shape: {
                type: 'string',
                sensitive: true,
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-aws-kms-key-id',
        },
        RequestCharged: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-charged',
        },
    },
};