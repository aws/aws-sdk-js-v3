import {Structure as _Structure_} from '@aws/types';

export const InitiateJobOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        location: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Location',
        },
        jobId: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-job-id',
        },
        jobOutputPath: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-job-output-path',
        },
    },
};