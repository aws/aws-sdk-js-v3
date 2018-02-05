import {DeleteVaultInput} from './DeleteVaultInput';
import {DeleteVaultOutput} from './DeleteVaultOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteVault: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteVault',
    http: {
        method: 'DELETE',
        requestUri: '/{accountId}/vaults/{vaultName}',
    },
    input: {
        shape: DeleteVaultInput,
    },
    output: {
        shape: DeleteVaultOutput,
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