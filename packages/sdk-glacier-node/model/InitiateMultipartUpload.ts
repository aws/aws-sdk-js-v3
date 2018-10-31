import {InitiateMultipartUploadInput} from './InitiateMultipartUploadInput';
import {InitiateMultipartUploadOutput} from './InitiateMultipartUploadOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const InitiateMultipartUpload: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'InitiateMultipartUpload',
    http: {
        method: 'POST',
        requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads',
    },
    input: {
        shape: InitiateMultipartUploadInput,
    },
    output: {
        shape: InitiateMultipartUploadOutput,
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