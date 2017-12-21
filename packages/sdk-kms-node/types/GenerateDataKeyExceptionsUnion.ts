import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {KeyUnavailableException} from './KeyUnavailableException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidKeyUsageException} from './InvalidKeyUsageException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {UnkownServiceException} from '@aws/types';
export type GenerateDataKeyExceptionsUnion = NotFoundException |
    DisabledException |
    KeyUnavailableException |
    DependencyTimeoutException |
    InvalidKeyUsageException |
    InvalidGrantTokenException |
    KMSInternalException |
    KMSInvalidStateException |
    UnkownServiceException;
