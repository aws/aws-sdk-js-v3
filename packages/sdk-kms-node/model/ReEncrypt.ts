import {ReEncryptInput} from './ReEncryptInput';
import {ReEncryptOutput} from './ReEncryptOutput';
import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {InvalidCiphertextException} from './InvalidCiphertextException';
import {KeyUnavailableException} from './KeyUnavailableException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidKeyUsageException} from './InvalidKeyUsageException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ReEncrypt: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ReEncrypt',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ReEncryptInput,
    },
    output: {
        shape: ReEncryptOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: DisabledException,
        },
        {
            shape: InvalidCiphertextException,
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