import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {KeyUnavailableException} from './KeyUnavailableException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidKeyUsageException} from './InvalidKeyUsageException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {SdkExceptions} from '@aws/types';
export type EncryptExceptionTypesUnion = NotFoundException |
    DisabledException |
    KeyUnavailableException |
    DependencyTimeoutException |
    InvalidKeyUsageException |
    InvalidGrantTokenException |
    KMSInternalException |
    KMSInvalidStateException |
    SdkExceptions;
