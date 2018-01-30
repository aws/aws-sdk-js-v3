import {_AccelerateConfiguration} from './_AccelerateConfiguration';
import {Structure as _Structure_} from '@aws/types';

export const PutBucketAccelerateConfigurationInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'AccelerateConfiguration',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        AccelerateConfiguration: {
            shape: _AccelerateConfiguration,
            locationName: 'AccelerateConfiguration',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
    },
    payload: 'AccelerateConfiguration',
};