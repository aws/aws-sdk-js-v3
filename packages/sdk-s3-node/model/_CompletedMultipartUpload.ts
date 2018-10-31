import {_CompletedPartList} from './_CompletedPartList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _CompletedMultipartUpload: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Parts: {
            shape: _CompletedPartList,
            locationName: 'Part',
        },
    },
};