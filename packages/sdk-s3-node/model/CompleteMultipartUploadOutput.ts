import {Structure as _Structure_} from '@aws-sdk/types';

export const CompleteMultipartUploadOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Location: {
            shape: {
                type: 'string',
            },
        },
        Bucket: {
            shape: {
                type: 'string',
            },
        },
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Expiration: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-expiration',
        },
        ETag: {
            shape: {
                type: 'string',
            },
        },
        ServerSideEncryption: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption',
        },
        VersionId: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-version-id',
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