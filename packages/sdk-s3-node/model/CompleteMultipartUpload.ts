import {CompleteMultipartUploadInput} from './CompleteMultipartUploadInput';
import {CompleteMultipartUploadOutput} from './CompleteMultipartUploadOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CompleteMultipartUpload: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CompleteMultipartUpload',
    http: {
        method: 'POST',
        requestUri: '/{Bucket}/{Key+}',
    },
    input: {
        shape: CompleteMultipartUploadInput,
    },
    output: {
        shape: CompleteMultipartUploadOutput,
    },
    errors: [],
};