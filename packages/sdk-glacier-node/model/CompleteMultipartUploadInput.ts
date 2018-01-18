import {Structure as _Structure_} from '@aws/types';

export const CompleteMultipartUploadInput: _Structure_ = {
    type: 'structure',
    required: [
        'accountId',
        'vaultName',
        'uploadId',
    ],
    members: {
        accountId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'accountId',
        },
        vaultName: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'vaultName',
        },
        uploadId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'uploadId',
        },
        archiveSize: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-archive-size',
        },
        checksum: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-sha256-tree-hash',
        },
    },
};