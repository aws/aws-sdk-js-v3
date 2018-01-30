import {PutBucketLifecycleInput} from './PutBucketLifecycleInput';
import {PutBucketLifecycleOutput} from './PutBucketLifecycleOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketLifecycle: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketLifecycle',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?lifecycle',
    },
    input: {
        shape: PutBucketLifecycleInput,
    },
    output: {
        shape: PutBucketLifecycleOutput,
    },
    errors: [],
};