import {_TagResourceIdList} from './_TagResourceIdList';
import {Structure as _Structure_} from '@aws/types';

export const ListTagsForResourcesInput: _Structure_ = {
    type: 'structure',
    required: [
        'ResourceType',
        'ResourceIds',
    ],
    members: {
        ResourceType: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'ResourceType',
        },
        ResourceIds: {
            shape: _TagResourceIdList,
        },
    },
};