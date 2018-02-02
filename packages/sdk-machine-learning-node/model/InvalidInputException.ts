import {Structure as _Structure_} from '@aws/types';

export const InvalidInputException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        message: {
            shape: {
                type: 'string',
            },
        },
        code: {
            shape: {
                type: 'integer',
            },
        },
    },
    exceptionType: 'InvalidInputException',
};