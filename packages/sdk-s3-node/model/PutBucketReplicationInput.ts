import {_ReplicationConfiguration} from './_ReplicationConfiguration';
import {Structure as _Structure_} from '@aws/types';

export const PutBucketReplicationInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'ReplicationConfiguration',
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
        ReplicationConfiguration: {
            shape: _ReplicationConfiguration,
            locationName: 'ReplicationConfiguration',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
    },
    payload: 'ReplicationConfiguration',
};