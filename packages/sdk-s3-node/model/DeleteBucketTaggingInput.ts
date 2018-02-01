import {Structure as _Structure_} from '@aws/types';

export const DeleteBucketTaggingInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
    },
};