import {Structure as _Structure_} from '@aws/types';

export const GetBucketLocationOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        LocationConstraint: {
            shape: {
                type: 'string',
            },
        },
    },
};