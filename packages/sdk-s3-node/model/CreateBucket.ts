import {CreateBucketInput} from './CreateBucketInput';
import {CreateBucketOutput} from './CreateBucketOutput';
import {BucketAlreadyExists} from './BucketAlreadyExists';
import {BucketAlreadyOwnedByYou} from './BucketAlreadyOwnedByYou';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateBucket: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateBucket',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}',
    },
    input: {
        shape: CreateBucketInput,
    },
    output: {
        shape: CreateBucketOutput,
    },
    errors: [
        {
            shape: BucketAlreadyExists,
        },
        {
            shape: BucketAlreadyOwnedByYou,
        },
    ],
};