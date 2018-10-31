import {InitiateJobInput} from './InitiateJobInput';
import {InitiateJobOutput} from './InitiateJobOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {PolicyEnforcedException} from './PolicyEnforcedException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {InsufficientCapacityException} from './InsufficientCapacityException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const InitiateJob: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'InitiateJob',
    http: {
        method: 'POST',
        requestUri: '/{accountId}/vaults/{vaultName}/jobs',
    },
    input: {
        shape: InitiateJobInput,
    },
    output: {
        shape: InitiateJobOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: PolicyEnforcedException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: MissingParameterValueException,
        },
        {
            shape: InsufficientCapacityException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};