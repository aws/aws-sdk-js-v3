import {_RestoreRequest} from './_RestoreRequest';
import {Structure as _Structure_} from '@aws/types';

export const RestoreObjectInput: _Structure_ = {
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
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Key',
        },
        VersionId: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'versionId',
        },
        RestoreRequest: {
            shape: _RestoreRequest,
            locationName: 'RestoreRequest',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
        RequestPayer: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-payer',
        },
    },
    payload: 'RestoreRequest',
};