import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {SdkExceptions} from '@aws/types';
export type DisableKeyRotationExceptionTypesUnion = NotFoundException |
    DisabledException |
    InvalidArnException |
    DependencyTimeoutException |
    KMSInternalException |
    KMSInvalidStateException |
    UnsupportedOperationException |
    SdkExceptions;
