import {_LoggingEnabled} from './_LoggingEnabled';
import {Structure as _Structure_} from '@aws/types';

export const _BucketLoggingStatus: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        LoggingEnabled: {
            shape: _LoggingEnabled,
        },
    },
};