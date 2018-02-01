import {RestoreObjectInput} from './RestoreObjectInput';
import {RestoreObjectOutput} from './RestoreObjectOutput';
import {ObjectAlreadyInActiveTierError} from './ObjectAlreadyInActiveTierError';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RestoreObject: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'RestoreObject',
    http: {
        method: 'POST',
        requestUri: '/{Bucket}/{Key+}?restore',
    },
    input: {
        shape: RestoreObjectInput,
    },
    output: {
        shape: RestoreObjectOutput,
    },
    errors: [
        {
            shape: ObjectAlreadyInActiveTierError,
        },
    ],
};