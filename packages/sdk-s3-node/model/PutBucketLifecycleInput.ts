import {_LifecycleConfiguration} from './_LifecycleConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutBucketLifecycleInput: _Structure_ = {
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
        ContentMD5: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Content-MD5',
        },
        LifecycleConfiguration: {
            shape: _LifecycleConfiguration,
            locationName: 'LifecycleConfiguration',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
    },
    payload: 'LifecycleConfiguration',
};