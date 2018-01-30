import {_ServerSideEncryptionRules} from './_ServerSideEncryptionRules';
import {Structure as _Structure_} from '@aws/types';

export const _ServerSideEncryptionConfiguration: _Structure_ = {
    type: 'structure',
    required: [
        'Rules',
    ],
    members: {
        Rules: {
            shape: _ServerSideEncryptionRules,
            locationName: 'Rule',
        },
    },
};