import {NotFoundException} from './NotFoundException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {UnkownServiceException} from '@aws/types';
export type ListGrantsExceptionsUnion = NotFoundException |
    DependencyTimeoutException |
    InvalidMarkerException |
    InvalidArnException |
    KMSInternalException |
    KMSInvalidStateException |
    UnkownServiceException;
