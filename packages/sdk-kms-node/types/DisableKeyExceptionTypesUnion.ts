import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {SdkExceptions} from '@aws/types';
export type DisableKeyExceptionTypesUnion = NotFoundException |
    InvalidArnException |
    DependencyTimeoutException |
    KMSInternalException |
    KMSInvalidStateException |
    SdkExceptions;
