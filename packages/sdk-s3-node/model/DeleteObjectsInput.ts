import {_Delete} from './_Delete';
import {Structure as _Structure_} from '@aws/types';

export const DeleteObjectsInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Delete',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        Delete: {
            shape: _Delete,
            locationName: 'Delete',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
        MFA: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-mfa',
        },
        RequestPayer: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-payer',
        },
    },
    payload: 'Delete',
};