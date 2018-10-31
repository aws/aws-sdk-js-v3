import {ListTagsForVaultInput} from './ListTagsForVaultInput';
import {ListTagsForVaultOutput} from './ListTagsForVaultOutput';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListTagsForVault: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListTagsForVault',
    http: {
        method: 'GET',
        requestUri: '/{accountId}/vaults/{vaultName}/tags',
    },
    input: {
        shape: ListTagsForVaultInput,
    },
    output: {
        shape: ListTagsForVaultOutput,
    },
    errors: [
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: MissingParameterValueException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};