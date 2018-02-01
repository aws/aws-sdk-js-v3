import {HeadBucketInput} from './HeadBucketInput';
import {HeadBucketOutput} from './HeadBucketOutput';
import {NoSuchBucket} from './NoSuchBucket';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const HeadBucket: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'HeadBucket',
    http: {
        method: 'HEAD',
        requestUri: '/{Bucket}',
    },
    input: {
        shape: HeadBucketInput,
    },
    output: {
        shape: HeadBucketOutput,
    },
    errors: [
        {
            shape: NoSuchBucket,
        },
    ],
};