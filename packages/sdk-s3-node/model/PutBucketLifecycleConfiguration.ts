import {PutBucketLifecycleConfigurationInput} from './PutBucketLifecycleConfigurationInput';
import {PutBucketLifecycleConfigurationOutput} from './PutBucketLifecycleConfigurationOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketLifecycleConfiguration: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketLifecycleConfiguration',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?lifecycle',
    },
    input: {
        shape: PutBucketLifecycleConfigurationInput,
    },
    output: {
        shape: PutBucketLifecycleConfigurationOutput,
    },
    errors: [],
};