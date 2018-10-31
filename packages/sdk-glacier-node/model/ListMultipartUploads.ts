import {ListMultipartUploadsInput} from './ListMultipartUploadsInput';
import {ListMultipartUploadsOutput} from './ListMultipartUploadsOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListMultipartUploads: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListMultipartUploads',
    http: {
        method: 'GET',
        requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads',
    },
    input: {
        shape: ListMultipartUploadsInput,
    },
    output: {
        shape: ListMultipartUploadsOutput,
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