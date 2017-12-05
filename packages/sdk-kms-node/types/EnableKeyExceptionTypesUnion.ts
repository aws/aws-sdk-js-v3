import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {LimitExceededException} from './LimitExceededException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {SdkExceptions} from '@aws/types';
export type EnableKeyExceptionTypesUnion = NotFoundException |
    InvalidArnException |
    DependencyTimeoutException |
    KMSInternalException |
    LimitExceededException |
    KMSInvalidStateException |
    SdkExceptions;
