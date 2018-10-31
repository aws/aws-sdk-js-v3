import {AbortMultipartUploadInput} from './AbortMultipartUploadInput';
import {AbortMultipartUploadOutput} from './AbortMultipartUploadOutput';
import {NoSuchUpload} from './NoSuchUpload';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const AbortMultipartUpload: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'AbortMultipartUpload',
    http: {
        method: 'DELETE',
        requestUri: '/{Bucket}/{Key+}',
    },
    input: {
        shape: AbortMultipartUploadInput,
    },
    output: {
        shape: AbortMultipartUploadOutput,
    },
    errors: [
        {
            shape: NoSuchUpload,
        },
    ],
};