import {_Metadata} from './_Metadata';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutObjectInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Key',
    ],
    members: {
        ACL: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-acl',
        },
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
        CacheControl: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Cache-Control',
        },
        ContentDisposition: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-Disposition',
        },
        ContentEncoding: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-Encoding',
        },
        ContentLanguage: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-Language',
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
        ContentType: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-Type',
        },
        Expires: {
            shape: {
                type: 'timestamp',
            },
            location: 'header',
            locationName: 'Expires',
        },
        GrantFullControl: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-grant-full-control',
        },
        GrantRead: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-grant-read',
        },
        GrantReadACP: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-grant-read-acp',
        },
        GrantWriteACP: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-grant-write-acp',
        },
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Key',
        },
        Metadata: {
            shape: _Metadata,
            location: 'headers',
            locationName: 'x-amz-meta-',
        },
        ServerSideEncryption: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption',
        },
        StorageClass: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-storage-class',
        },
        WebsiteRedirectLocation: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-website-redirect-location',
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
        SSEKMSKeyId: {
            shape: {
                type: 'string',
                sensitive: true,
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-aws-kms-key-id',
        },
        RequestPayer: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-payer',
        },
        Tagging: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-tagging',
        },
    },
    payload: 'Body',
};