import {_ServerSideEncryptionConfiguration} from './_ServerSideEncryptionConfiguration';
import {Structure as _Structure_} from '@aws/types';

export const PutBucketEncryptionInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'ServerSideEncryptionConfiguration',
    ],
    members: {
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
        ServerSideEncryptionConfiguration: {
            shape: _ServerSideEncryptionConfiguration,
            locationName: 'ServerSideEncryptionConfiguration',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
    },
    payload: 'ServerSideEncryptionConfiguration',
};