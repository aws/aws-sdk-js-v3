import {PutBucketPolicyInput} from './PutBucketPolicyInput';
import {PutBucketPolicyOutput} from './PutBucketPolicyOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketPolicy: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketPolicy',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?policy',
    },
    input: {
        shape: PutBucketPolicyInput,
    },
    output: {
        shape: PutBucketPolicyOutput,
    },
    errors: [],
};