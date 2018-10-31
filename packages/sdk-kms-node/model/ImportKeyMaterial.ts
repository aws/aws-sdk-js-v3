import {ImportKeyMaterialInput} from './ImportKeyMaterialInput';
import {ImportKeyMaterialOutput} from './ImportKeyMaterialOutput';
import {InvalidArnException} from './InvalidArnException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {InvalidCiphertextException} from './InvalidCiphertextException';
import {IncorrectKeyMaterialException} from './IncorrectKeyMaterialException';
import {ExpiredImportTokenException} from './ExpiredImportTokenException';
import {InvalidImportTokenException} from './InvalidImportTokenException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ImportKeyMaterial: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ImportKeyMaterial',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ImportKeyMaterialInput,
    },
    output: {
        shape: ImportKeyMaterialOutput,
    },
    errors: [
        {
            shape: InvalidArnException,
        },
        {
            shape: UnsupportedOperationException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
        {
            shape: InvalidCiphertextException,
        },
        {
            shape: IncorrectKeyMaterialException,
        },
        {
            shape: ExpiredImportTokenException,
        },
        {
            shape: InvalidImportTokenException,
        },
    ],
};