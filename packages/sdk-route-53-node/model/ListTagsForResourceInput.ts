import {Structure as _Structure_} from '@aws/types';

export const ListTagsForResourceInput: _Structure_ = {
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
    },
};