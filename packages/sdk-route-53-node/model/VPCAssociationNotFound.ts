import {Structure as _Structure_} from '@aws/types';

export const VPCAssociationNotFound: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        message: {
            shape: {
                type: 'string',
            },
        },
    },
    exceptionType: 'VPCAssociationNotFound',
};