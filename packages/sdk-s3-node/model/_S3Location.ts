import {_Encryption} from './_Encryption';
import {_Grants} from './_Grants';
import {_Tagging} from './_Tagging';
import {_UserMetadata} from './_UserMetadata';
import {Structure as _Structure_} from '@aws/types';

export const _S3Location: _Structure_ = {
    type: 'structure',
    required: [
        'BucketName',
        'Prefix',
    ],
    members: {
        BucketName: {
            shape: {
                type: 'string',
            },
        },
        Prefix: {
            shape: {
                type: 'string',
            },
        },
        Encryption: {
            shape: _Encryption,
        },
        CannedACL: {
            shape: {
                type: 'string',
            },
        },
        AccessControlList: {
            shape: _Grants,
        },
        Tagging: {
            shape: _Tagging,
        },
        UserMetadata: {
            shape: _UserMetadata,
        },
        StorageClass: {
            shape: {
                type: 'string',
            },
        },
    },
};