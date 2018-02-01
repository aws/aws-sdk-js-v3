import {Structure as _Structure_} from '@aws/types';

export const GetBucketVersioningOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Status: {
            shape: {
                type: 'string',
            },
        },
        MFADelete: {
            shape: {
                type: 'string',
            },
            locationName: 'MfaDelete',
        },
    },
};