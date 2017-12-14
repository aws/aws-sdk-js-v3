import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {UnkownServiceException} from '@aws/types';
export type ListKeysExceptionsUnion = DependencyTimeoutException |
    KMSInternalException |
    InvalidMarkerException |
    UnkownServiceException;
