import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {KMSInternalException} from './KMSInternalException';
import {SdkExceptions} from '@aws/types';
export type ListAliasesExceptionTypesUnion = DependencyTimeoutException |
    InvalidMarkerException |
    KMSInternalException |
    SdkExceptions;
