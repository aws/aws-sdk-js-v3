import {_WebsiteConfiguration} from './_WebsiteConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PutBucketWebsiteInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'WebsiteConfiguration',
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
        WebsiteConfiguration: {
            shape: _WebsiteConfiguration,
            locationName: 'WebsiteConfiguration',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
    },
    payload: 'WebsiteConfiguration',
};