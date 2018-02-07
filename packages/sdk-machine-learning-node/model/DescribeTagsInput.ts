import {Structure as _Structure_} from '@aws/types';

export const DescribeTagsInput: _Structure_ = {
    type: 'structure',
    required: [
        'ResourceId',
        'ResourceType',
    ],
    members: {
        ResourceId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ResourceType: {
            shape: {
                type: 'string',
            },
        },
    },
};