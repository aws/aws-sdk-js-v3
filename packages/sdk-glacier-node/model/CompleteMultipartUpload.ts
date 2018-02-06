import {CompleteMultipartUploadInput} from './CompleteMultipartUploadInput';
import {CompleteMultipartUploadOutput} from './CompleteMultipartUploadOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CompleteMultipartUpload: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CompleteMultipartUpload',
    http: {
        method: 'POST',
        requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
    },
    input: {
        shape: CompleteMultipartUploadInput,
    },
    output: {
        shape: CompleteMultipartUploadOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: MissingParameterValueException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};