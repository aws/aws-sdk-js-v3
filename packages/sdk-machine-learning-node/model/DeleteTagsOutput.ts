import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteTagsOutput: _Structure_ = {
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