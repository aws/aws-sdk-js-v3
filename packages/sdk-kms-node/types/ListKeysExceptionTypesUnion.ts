import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {SdkExceptions} from '@aws/types';
export type ListKeysExceptionTypesUnion = DependencyTimeoutException |
    KMSInternalException |
    InvalidMarkerException |
    SdkExceptions;
