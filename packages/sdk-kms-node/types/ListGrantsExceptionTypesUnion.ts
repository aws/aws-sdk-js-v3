import {NotFoundException} from './NotFoundException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {SdkExceptions} from '@aws/types';
export type ListGrantsExceptionTypesUnion = NotFoundException |
    DependencyTimeoutException |
    InvalidMarkerException |
    InvalidArnException |
    KMSInternalException |
    KMSInvalidStateException |
    SdkExceptions;
