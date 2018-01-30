import {_Owner} from './_Owner';
import {Structure as _Structure_} from '@aws/types';

export const _ObjectVersion: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ETag: {
            shape: {
                type: 'string',
            },
        },
        Size: {
            shape: {
                type: 'integer',
            },
        },
        StorageClass: {
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
        VersionId: {
            shape: {
                type: 'string',
            },
        },
        IsLatest: {
            shape: {
                type: 'boolean',
            },
        },
        LastModified: {
            shape: {
                type: 'timestamp',
                timestampFormat: 'rfc822',
            },
        },
        Owner: {
            shape: _Owner,
        },
    },
};