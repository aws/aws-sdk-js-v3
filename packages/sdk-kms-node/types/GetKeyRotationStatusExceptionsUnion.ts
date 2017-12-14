import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {UnkownServiceException} from '@aws/types';
export type GetKeyRotationStatusExceptionsUnion = NotFoundException |
    InvalidArnException |
    DependencyTimeoutException |
    KMSInternalException |
    KMSInvalidStateException |
    UnsupportedOperationException |
    UnkownServiceException;
