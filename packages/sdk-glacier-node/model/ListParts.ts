import {ListPartsInput} from './ListPartsInput';
import {ListPartsOutput} from './ListPartsOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListParts: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListParts',
    http: {
        method: 'GET',
        requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
    },
    input: {
        shape: ListPartsInput,
    },
    output: {
        shape: ListPartsOutput,
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