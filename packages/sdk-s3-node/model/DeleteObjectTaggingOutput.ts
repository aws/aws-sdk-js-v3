import {Structure as _Structure_} from '@aws/types';

export const DeleteObjectTaggingOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        VersionId: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-version-id',
        },
    },
};