import {NotFoundException} from './NotFoundException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidArnException} from './InvalidArnException';
import {InvalidGrantIdException} from './InvalidGrantIdException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {SdkExceptions} from '@aws/types';
export type RevokeGrantExceptionTypesUnion = NotFoundException |
    DependencyTimeoutException |
    InvalidArnException |
    InvalidGrantIdException |
    KMSInternalException |
    KMSInvalidStateException |
    SdkExceptions;
