import {_Owner} from './_Owner';
import {_Initiator} from './_Initiator';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _MultipartUpload: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        UploadId: {
            shape: {
                type: 'string',
            },
        },
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Initiated: {
            shape: {
                type: 'timestamp',
            },
        },
        StorageClass: {
            shape: {
                type: 'string',
            },
        },
        Owner: {
            shape: _Owner,
        },
        Initiator: {
            shape: _Initiator,
        },
    },
};