import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {SdkExceptions} from '@aws/types';
export type DeleteAliasExceptionTypesUnion = DependencyTimeoutException |
    NotFoundException |
    KMSInternalException |
    KMSInvalidStateException |
    SdkExceptions;
