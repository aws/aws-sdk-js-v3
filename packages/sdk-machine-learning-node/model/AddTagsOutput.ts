import {Structure as _Structure_} from '@aws/types';

export const AddTagsOutput: _Structure_ = {
    type: 'structure',
    required: [],
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