import {_SseKmsEncryptedObjects} from './_SseKmsEncryptedObjects';
import {Structure as _Structure_} from '@aws/types';

export const _SourceSelectionCriteria: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        SseKmsEncryptedObjects: {
            shape: _SseKmsEncryptedObjects,
        },
    },
};