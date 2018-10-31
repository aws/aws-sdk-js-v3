import {GenerateDataKeyInput} from './GenerateDataKeyInput';
import {GenerateDataKeyOutput} from './GenerateDataKeyOutput';
import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {KeyUnavailableException} from './KeyUnavailableException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidKeyUsageException} from './InvalidKeyUsageException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GenerateDataKey: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GenerateDataKey',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GenerateDataKeyInput,
    },
    output: {
        shape: GenerateDataKeyOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: DisabledException,
        },
        {
            shape: KeyUnavailableException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: InvalidKeyUsageException,
        },
        {
            shape: InvalidGrantTokenException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};