import {_JobList} from './_JobList';
import {Structure as _Structure_} from '@aws/types';

export const ListJobsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        JobList: {
            shape: _JobList,
        },
        Marker: {
            shape: {
                type: 'string',
            },
        },
    },
};