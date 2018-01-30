import {_ServerSideEncryptionConfiguration} from './_ServerSideEncryptionConfiguration';
import {Structure as _Structure_} from '@aws/types';

export const GetBucketEncryptionOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ServerSideEncryptionConfiguration: {
            shape: _ServerSideEncryptionConfiguration,
        },
    },
    payload: 'ServerSideEncryptionConfiguration',
};