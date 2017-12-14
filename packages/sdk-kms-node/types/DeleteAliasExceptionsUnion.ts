import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {UnkownServiceException} from '@aws/types';
export type DeleteAliasExceptionsUnion = DependencyTimeoutException |
    NotFoundException |
    KMSInternalException |
    KMSInvalidStateException |
    UnkownServiceException;
