import {_SelectObjectContentEventStream} from './_SelectObjectContentEventStream';
import {Structure as _Structure_} from '@aws/types';

export const SelectObjectContentOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Payload: {
            shape: _SelectObjectContentEventStream,
        },
    },
    payload: 'Payload',
};