import {DeleteObjectsInput} from './DeleteObjectsInput';
import {DeleteObjectsOutput} from './DeleteObjectsOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteObjects: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteObjects',
    http: {
        method: 'POST',
        requestUri: '/{Bucket}?delete',
    },
    input: {
        shape: DeleteObjectsInput,
    },
    output: {
        shape: DeleteObjectsOutput,
    },
    errors: [],
};