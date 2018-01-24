import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {InvalidMarkerException} from './InvalidMarkerException';
export type ListKeysExceptionsUnion = DependencyTimeoutException |
    KMSInternalException |
    InvalidMarkerException;
