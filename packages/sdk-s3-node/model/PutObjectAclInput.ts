import {_AccessControlPolicy} from './_AccessControlPolicy';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutObjectAclInput: _Structure_ = {
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
        AccessControlPolicy: {
            shape: _AccessControlPolicy,
            locationName: 'AccessControlPolicy',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        ContentMD5: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-MD5',
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
        GrantWrite: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-grant-write',
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
        RequestPayer: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-payer',
        },
        VersionId: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'versionId',
        },
    },
    payload: 'AccessControlPolicy',
};