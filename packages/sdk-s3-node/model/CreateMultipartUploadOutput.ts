import {Structure as _Structure_} from '@aws/types';

export const CreateMultipartUploadOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        AbortDate: {
            shape: {
                type: 'timestamp',
                timestampFormat: 'rfc822',
            },
            location: 'header',
            locationName: 'x-amz-abort-date',
        },
        AbortRuleId: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-abort-rule-id',
        },
        Bucket: {
            shape: {
                type: 'string',
            },
            locationName: 'Bucket',
        },
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        UploadId: {
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