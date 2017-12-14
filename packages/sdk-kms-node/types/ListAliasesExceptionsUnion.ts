import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {KMSInternalException} from './KMSInternalException';
import {UnkownServiceException} from '@aws/types';
export type ListAliasesExceptionsUnion = DependencyTimeoutException |
    InvalidMarkerException |
    KMSInternalException |
    UnkownServiceException;
