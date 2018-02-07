import {_ErrorMessages} from './_ErrorMessages';
import {Structure as _Structure_} from '@aws/types';

export const InvalidChangeBatch: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        messages: {
            shape: _ErrorMessages,
        },
        message: {
            shape: {
                type: 'string',
            },
        },
    },
    exceptionType: 'InvalidChangeBatch',
};