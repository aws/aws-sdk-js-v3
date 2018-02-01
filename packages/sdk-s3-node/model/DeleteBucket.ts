import {DeleteBucketInput} from './DeleteBucketInput';
import {DeleteBucketOutput} from './DeleteBucketOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteBucket: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteBucket',
    http: {
        method: 'DELETE',
        requestUri: '/{Bucket}',
    },
    input: {
        shape: DeleteBucketInput,
    },
    output: {
        shape: DeleteBucketOutput,
    },
    errors: [],
};