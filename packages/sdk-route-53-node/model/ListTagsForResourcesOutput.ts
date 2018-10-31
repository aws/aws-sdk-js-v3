import {_ResourceTagSetList} from './_ResourceTagSetList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListTagsForResourcesOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ResourceTagSets',
    ],
    members: {
        ResourceTagSets: {
            shape: _ResourceTagSetList,
        },
    },
};