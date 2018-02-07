import {_TagList} from './_TagList';
import {Structure as _Structure_} from '@aws/types';

export const AddTagsInput: _Structure_ = {
    type: 'structure',
    required: [
        'Tags',
        'ResourceId',
        'ResourceType',
    ],
    members: {
        Tags: {
            shape: _TagList,
        },
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