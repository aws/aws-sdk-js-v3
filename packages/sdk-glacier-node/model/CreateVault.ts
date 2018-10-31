import {CreateVaultInput} from './CreateVaultInput';
import {CreateVaultOutput} from './CreateVaultOutput';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {LimitExceededException} from './LimitExceededException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateVault: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateVault',
    http: {
        method: 'PUT',
        requestUri: '/{accountId}/vaults/{vaultName}',
    },
    input: {
        shape: CreateVaultInput,
    },
    output: {
        shape: CreateVaultOutput,
    },
    errors: [
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: MissingParameterValueException,
        },
        {
            shape: ServiceUnavailableException,
        },
        {
            shape: LimitExceededException,
        },
    ],
};