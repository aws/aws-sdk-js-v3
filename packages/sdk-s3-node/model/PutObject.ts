import {PutObjectInput} from './PutObjectInput';
import {PutObjectOutput} from './PutObjectOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutObject: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutObject',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}/{Key+}',
    },
    input: {
        shape: PutObjectInput,
    },
    output: {
        shape: PutObjectOutput,
    },
    errors: [],
};