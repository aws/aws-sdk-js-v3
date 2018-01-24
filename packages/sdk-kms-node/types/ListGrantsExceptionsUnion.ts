import {NotFoundException} from './NotFoundException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
export type ListGrantsExceptionsUnion = NotFoundException |
    DependencyTimeoutException |
    InvalidMarkerException |
    InvalidArnException |
    KMSInternalException |
    KMSInvalidStateException;
