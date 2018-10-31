import {GenerateRandomInput} from './GenerateRandomInput';
import {GenerateRandomOutput} from './GenerateRandomOutput';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GenerateRandom: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GenerateRandom',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GenerateRandomInput,
    },
    output: {
        shape: GenerateRandomOutput,
    },
    errors: [
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: KMSInternalException,
        },
    ],
};