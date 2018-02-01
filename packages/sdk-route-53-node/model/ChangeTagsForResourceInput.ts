import {_TagList} from './_TagList';
import {_TagKeyList} from './_TagKeyList';
import {Structure as _Structure_} from '@aws/types';

export const ChangeTagsForResourceInput: _Structure_ = {
    type: 'structure',
    required: [
        'ResourceType',
        'ResourceId',
    ],
    members: {
        ResourceType: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'ResourceType',
        },
        ResourceId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'ResourceId',
        },
        AddTags: {
            shape: _TagList,
        },
        RemoveTagKeys: {
            shape: _TagKeyList,
        },
    },
};