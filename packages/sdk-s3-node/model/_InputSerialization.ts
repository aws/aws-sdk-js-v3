import {_CSVInput} from './_CSVInput';
import {Structure as _Structure_} from '@aws/types';

export const _InputSerialization: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        CSV: {
            shape: _CSVInput,
        },
    },
};