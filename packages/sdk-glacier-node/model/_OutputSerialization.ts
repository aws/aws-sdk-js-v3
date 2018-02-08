import {_CSVOutput} from './_CSVOutput';
import {Structure as _Structure_} from '@aws/types';

export const _OutputSerialization: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        csv: {
            shape: _CSVOutput,
        },
    },
};