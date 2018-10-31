import {Structure as _Structure_} from '@aws-sdk/types';

export const _DeletedObject: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        VersionId: {
            shape: {
                type: 'string',
            },
        },
        DeleteMarker: {
            shape: {
                type: 'boolean',
            },
        },
        DeleteMarkerVersionId: {
            shape: {
                type: 'string',
            },
        },
    },
};