import {Structure as _Structure_} from '@aws/types';

export const _AbortIncompleteMultipartUpload: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        DaysAfterInitiation: {
            shape: {
                type: 'integer',
            },
        },
    },
};