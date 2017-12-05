import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {SdkExceptions} from '@aws/types';
export type UpdateAliasExceptionTypesUnion = DependencyTimeoutException |
    NotFoundException |
    KMSInternalException |
    KMSInvalidStateException |
    SdkExceptions;
