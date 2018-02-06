import {Structure as _Structure_} from '@aws/types';

export const HeadObjectInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Key',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        IfMatch: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'If-Match',
        },
        IfModifiedSince: {
            shape: {
                type: 'timestamp',
                timestampFormat: 'rfc822',
            },
            location: 'header',
            locationName: 'If-Modified-Since',
        },
        IfNoneMatch: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'If-None-Match',
        },
        IfUnmodifiedSince: {
            shape: {
                type: 'timestamp',
                timestampFormat: 'rfc822',
            },
            location: 'header',
            locationName: 'If-Unmodified-Since',
        },
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Key',
        },
        Range: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Range',
        },
        VersionId: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'versionId',
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
                type: 'blob',
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
        PartNumber: {
            shape: {
                type: 'integer',
            },
            location: 'querystring',
            locationName: 'partNumber',
        },
    },
};