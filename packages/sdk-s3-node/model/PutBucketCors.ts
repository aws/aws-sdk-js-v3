import {PutBucketCorsInput} from './PutBucketCorsInput';
import {PutBucketCorsOutput} from './PutBucketCorsOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketCors: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketCors',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?cors',
    },
    input: {
        shape: PutBucketCorsInput,
    },
    output: {
        shape: PutBucketCorsOutput,
    },
    errors: [],
};