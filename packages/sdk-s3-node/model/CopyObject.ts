import {CopyObjectInput} from './CopyObjectInput';
import {CopyObjectOutput} from './CopyObjectOutput';
import {ObjectNotInActiveTierError} from './ObjectNotInActiveTierError';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CopyObject: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CopyObject',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}/{Key+}',
    },
    input: {
        shape: CopyObjectInput,
    },
    output: {
        shape: CopyObjectOutput,
    },
    errors: [
        {
            shape: ObjectNotInActiveTierError,
        },
    ],
};