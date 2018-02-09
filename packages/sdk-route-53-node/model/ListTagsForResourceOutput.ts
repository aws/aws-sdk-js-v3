import {_ResourceTagSet} from './_ResourceTagSet';
import {Structure as _Structure_} from '@aws/types';

export const ListTagsForResourceOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ResourceTagSet',
    ],
    members: {
        ResourceTagSet: {
            shape: _ResourceTagSet,
        },
    },
};