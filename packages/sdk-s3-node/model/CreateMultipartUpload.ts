import {CreateMultipartUploadInput} from './CreateMultipartUploadInput';
import {CreateMultipartUploadOutput} from './CreateMultipartUploadOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateMultipartUpload: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateMultipartUpload',
    http: {
        method: 'POST',
        requestUri: '/{Bucket}/{Key+}?uploads',
    },
    input: {
        shape: CreateMultipartUploadInput,
    },
    output: {
        shape: CreateMultipartUploadOutput,
    },
    errors: [],
};