import {NotFoundException} from './NotFoundException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidArnException} from './InvalidArnException';
import {InvalidGrantIdException} from './InvalidGrantIdException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {UnkownServiceException} from '@aws/types';
export type RevokeGrantExceptionsUnion = NotFoundException |
    DependencyTimeoutException |
    InvalidArnException |
    InvalidGrantIdException |
    KMSInternalException |
    KMSInvalidStateException |
    UnkownServiceException;
