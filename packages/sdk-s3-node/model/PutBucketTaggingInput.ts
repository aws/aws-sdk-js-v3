import {_Tagging} from './_Tagging';
import {Structure as _Structure_} from '@aws/types';

export const PutBucketTaggingInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Tagging',
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
        Tagging: {
            shape: _Tagging,
            locationName: 'Tagging',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
    },
    payload: 'Tagging',
};