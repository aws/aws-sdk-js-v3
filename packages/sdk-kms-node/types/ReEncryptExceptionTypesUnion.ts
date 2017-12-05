import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {InvalidCiphertextException} from './InvalidCiphertextException';
import {KeyUnavailableException} from './KeyUnavailableException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidKeyUsageException} from './InvalidKeyUsageException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {SdkExceptions} from '@aws/types';
export type ReEncryptExceptionTypesUnion = NotFoundException |
    DisabledException |
    InvalidCiphertextException |
    KeyUnavailableException |
    DependencyTimeoutException |
    InvalidKeyUsageException |
    InvalidGrantTokenException |
    KMSInternalException |
    KMSInvalidStateException |
    SdkExceptions;
