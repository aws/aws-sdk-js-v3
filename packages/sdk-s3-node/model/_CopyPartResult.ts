import {Structure as _Structure_} from '@aws/types';

export const _CopyPartResult: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ETag: {
            shape: {
                type: 'string',
            },
        },
        LastModified: {
            shape: {
                type: 'timestamp',
                timestampFormat: 'rfc822',
            },
        },
    },
};