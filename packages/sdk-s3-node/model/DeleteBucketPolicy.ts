import {DeleteBucketPolicyInput} from './DeleteBucketPolicyInput';
import {DeleteBucketPolicyOutput} from './DeleteBucketPolicyOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteBucketPolicy: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteBucketPolicy',
    http: {
        method: 'DELETE',
        requestUri: '/{Bucket}?policy',
    },
    input: {
        shape: DeleteBucketPolicyInput,
    },
    output: {
        shape: DeleteBucketPolicyOutput,
    },
    errors: [],
};