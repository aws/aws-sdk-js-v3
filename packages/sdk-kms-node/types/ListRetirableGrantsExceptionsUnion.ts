import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {InvalidArnException} from './InvalidArnException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
export type ListRetirableGrantsExceptionsUnion = DependencyTimeoutException |
    InvalidMarkerException |
    InvalidArnException |
    NotFoundException |
    KMSInternalException;
