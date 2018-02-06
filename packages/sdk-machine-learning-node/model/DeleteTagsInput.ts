import {_TagKeyList} from './_TagKeyList';
import {Structure as _Structure_} from '@aws/types';

export const DeleteTagsInput: _Structure_ = {
    type: 'structure',
    required: [
        'TagKeys',
        'ResourceId',
        'ResourceType',
    ],
    members: {
        TagKeys: {
            shape: _TagKeyList,
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